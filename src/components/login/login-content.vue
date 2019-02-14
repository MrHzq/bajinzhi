/*
 * @Author: hzq
 * @Date: 2019-01-25 15:11:45
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-14 15:55:40
 * @文件说明: 登录页面-登录组件部分
 */
<template>
    <login-warp>
        <div slot="left" class="login-content">
            <h-cursor class="quick-login">
                <template v-if="loginType === 'pc'">
                    <img src="~assets/wx-login.png" alt="wx-login" @click="loginType = 'wx'" />
                    <span @click="loginType = 'wx'">微信快速登录</span>
                </template>
                <template v-else>
                    <img src="~assets/pc-login.png" alt="pc-login" @click="loginType = 'pc'" />
                    <span @click="loginType = 'pc'">账号密码登录</span>
                </template>
            </h-cursor>
            <div v-if="loginType === 'pc'" class="pc-login">
                <div class="type">登录</div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="account">
                        <h-input v-model="loginForm.account" big placeholder="请输入用户名/手机号码"></h-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <h-input v-model="loginForm.password" type="password" big placeholder="请输入密码"></h-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input v-model="loginForm.code" placeholder="请输入验证码">
                            <img v-if="captcha" @click="getCaptcha" slot="suffix" class="suffix-img" :src="captcha" alt="suffix-img" />
                            <i v-else slot="suffix" class="el-icon-loading"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
                <span class="forget-pwd" @click="$emit('update:currFrom', 'forget')">忘记密码？</span>
                <h-button type="primary" @click="loginFun" :loading="loading" size="default">马上登录</h-button>
            </div>
            <div v-else class="wx-login">
                <img src="~assets/wx-QRcode.png" alt="wx-QRcode" />
                <p>微信扫一扫，快速登录</p>
            </div>
        </div>
        <div slot="right-text1">还没有账号</div>
        <div slot="right-text2" @click="$emit('update:currFrom', 'register')">
            立即注册
        </div>
    </login-warp>
</template>

<script>
    export default {
        name: 'login-content',
        props: ['currFrom'],
        data() {
            // 用户名验证
            const checkUsername = (rule, value, callback) => {
                // 不能为空
                if (!value) {
                    return callback(new Error('请输入用户名'))
                }
                // 通过接口判断，是否已存在
                this.$api.usernameExist({ username: value }).then(res => {
                    if (res.code === '0') {
                        callback(new Error('用户不存在，请注册'))
                    } else callback()
                })
            }
            // 密码验证
            const checkPass = (rule, value, callback) => {
                // 不能为空
                if (!value) {
                    return callback(new Error('请输入密码'))
                }
                if (this.errorPwd) {
                    callback(new Error('密码错误'))
                    this.errorPwd = false
                } else callback()
            }
            // 图形验证码 验证
            const checkCode = (rule, value, callback) => {
                // 不能为空
                if (!value) {
                    return callback(new Error('请输入验证码'))
                }
                // 通过接口判断，图形验证码是否正确
                this.$api
                    .verifyCaptcha({
                        id: this.captchaId,
                        verifyvalue: value
                    })
                    .then(res => {
                        if (res.code === '1') {
                            callback(new Error('验证码错误'))
                            this.getCaptcha()
                        } else callback()
                    })
            }
            return {
                // 登录方式：pc|wx
                loginType: 'pc',
                // 图形验证码 base64 地址
                captcha: '',
                // 图形验证码Id
                captchaId: '',
                // 登录数据
                loginForm: {
                    account: 'hzq',
                    password: '123456',
                    code: ''
                },
                loading: false,
                errorPwd: false,
                rules: {
                    account: [{ validator: checkUsername, trigger: 'blur' }],
                    password: [{ validator: checkPass, trigger: 'blur' }],
                    code: [{ validator: checkCode, trigger: 'blur' }]
                }
            }
        },
        methods: {
            getCaptcha() {
                this.captcha = ''
                this.$api.getCaptcha().then(res => {
                    if (res.code === '0') {
                        this.captcha = res.data.data
                        this.captchaId = res.data.captchaId
                    }
                })
            },
            loginFun() {
                if (this.loading) return
                if (this.captcha) {
                    this.$refs.loginForm.validate(valid => {
                        if (valid) {
                            this.loading = true
                            let { account, password } = this.loginForm
                            this.$api.login({ account, password }).then(res => {
                                if (res.code === '0') {
                                    this.$setItem('lp', res.data.token)
                                    let nav = 'user'
                                    this.$setNav(nav)
                                    this.$to(nav)
                                } else {
                                    this.loading = false
                                    this.errorPwd = true
                                    this.$refs.loginForm.validateField('password')
                                }
                            })
                        }
                    })
                } else {
                    let nav = 'user'
                    this.$setNav(nav)
                    this.$to(nav)
                }
            }
        },
        created() {
            this.getCaptcha()
        }
    }
</script>

<style lang="scss" scoped>
    @import '~style/login';
    // 登录-表单部分
    .login-content {
        width: 470px;
        height: 460px;
        padding: 10px 40px 0 10px;
        @include c6;
        box-sizing: border-box;
        .quick-login {
            img {
                width: 56px;
            }
            span {
                vertical-align: top;
            }
        }
        .pc-login {
            margin-top: 10px;
            margin-left: 60px;
            .suffix-img {
                height: 30px;
                margin-top: 5px;
                cursor: pointer;
            }
            .forget-pwd {
                display: inline-block;
                margin-bottom: 20px;
                cursor: pointer;
                user-select: none;
            }
        }
        .wx-login {
            margin-top: 60px;
            @include c9;
            text-align: center;
            img {
                width: 225px;
            }
        }
    }
</style>
