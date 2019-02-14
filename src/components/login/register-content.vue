/*
 * @Author: hzq
 * @Date: 2019-01-23 15:48:58
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 15:01:54
 * @文件说明:登录页面-注册组件部分
 */
<template>
    <login-warp h="657">
        <div slot="left" class="register-content">
            <div class="type">注册</div>
            <el-form :model="regForm" :rules="rules" ref="regForm">
                <el-form-item prop="username">
                    <h-input v-model.trim="regForm.username" big placeholder="用户名"></h-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <h-input v-model.trim="regForm.pwd" type="password" big placeholder="密码"></h-input>
                </el-form-item>
                <el-form-item prop="rpPwd">
                    <h-input v-model.trim="regForm.rpPwd" type="password" big placeholder="确认密码"></h-input>
                </el-form-item>
                <el-form-item prop="phone">
                    <h-input v-model.trim="regForm.phone" big placeholder="手机号码" maxlength="11"></h-input>
                </el-form-item>
                <el-form-item prop="code">
                    <h-input v-model.trim="regForm.code" big placeholder="验证码">
                        <div slot="suffix">
                            <div class="wait-time" v-if="time">
                                {{ time }}s后获取
                            </div>
                            <div class="get-code" v-else @click="getCode">
                                获取验证码
                            </div>
                        </div>
                    </h-input>
                </el-form-item>
            </el-form>
            <h-button type="primary" @click="regFun" :loading="loading" size="default">马上注册</h-button>
        </div>
        <div slot="right-text1">已有账号</div>
        <div slot="right-text2" @click="toLogin">立即登录</div>
    </login-warp>
</template>

<script>
    export default {
        name: 'register-content',
        props: ['currFrom'],
        data() {
            // 用户名验证
            const checkUsername = (rule, value, callback) => {
                // 不能为空
                if (!value) {
                    return callback(new Error('请输入用户名'))
                }
                // 通过接口判断，是否已存在
                this.$api
                    .usernameExist({
                        username: value
                    })
                    .then(res => {
                        if (res.code === '1') {
                            callback(new Error('用户已存在，请重新输入'))
                        } else callback()
                    })
            }
            // 密码 验证
            const checkPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.regForm.rpPwd !== '') {
                        this.$refs.regForm.validateField('rpPwd')
                    }
                    callback()
                }
            }
            // 二次密码确认 验证
            const checkRpPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'))
                } else if (value !== this.regForm.pwd) {
                    callback(new Error('两次输入密码不一致!'))
                } else callback()
            }
            // 手机号 验证
            const checkPhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'))
                } else if (
                    /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)
                ) {
                    callback()
                    if (this.isGetCode) this.sendMsg()
                } else callback(new Error('请输入正确的手机号码'))
                this.isGetCode = false
            }
            return {
                // 验证码重新获取时间
                time: 0,
                loading: false,
                isGetCode: false,
                regForm: {
                    username: '',
                    pwd: '',
                    rpPwd: '',
                    phone: '',
                    code: ''
                },
                rules: {
                    username: [{ validator: checkUsername, trigger: 'blur' }],
                    pwd: [{ validator: checkPwd, trigger: 'blur' }],
                    rpPwd: [{ validator: checkRpPwd, trigger: 'blur' }],
                    phone: [{ validator: checkPhone, trigger: 'blur' }],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            // 获取验证码点击事件
            getCode() {
                this.isGetCode = true
                this.$refs.regForm.validateField('phone')
            },
            // 发生验证码、倒计时 功能
            sendMsg() {
                this.time = 60
                let T = setInterval(() => --this.time || clearInterval(T), 1000)
            },
            // 注册事件
            regFun() {
                if (this.loading) return
                this.$refs.regForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        let { phone, username, pwd: password } = this.regForm
                        this.$api
                            .register({ phone, username, password })
                            .then(res => {
                                if (res.code === '0') {
                                    this.toLogin()
                                    this.$msg(res.msg, 's')
                                } else this.$msg(res.msg)
                                this.loading = false
                            })
                    }
                })
            },
            // 返回登录
            toLogin() {
                this.$emit('update:currFrom', 'login')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~style/login';
    // 注册-表单部分
    .register-content {
        width: 470px;
        height: 460px;
        box-sizing: border-box;
        padding: 20px 40px 0;
        .get-code {
            color: $blue;

            cursor: pointer;
            user-select: none;
        }
        .wait-time {
            color: #bbb;

            cursor: no-drop;
        }
    }
</style>
