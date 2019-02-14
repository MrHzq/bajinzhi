/*
 * @Author: hzq
 * @Date: 2019-01-21 17:39:59
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 15:04:01
 * @文件说明: 登录页面-忘记密码部分
 */
<template>
    <login-warp h="500">
        <div slot="left" class="forget-content">
            <el-steps :active="step" align-center>
                <el-step title="01验证手机号">
                    <div slot="icon" style="opacity: 0;">1</div>
                </el-step>
                <el-step title="02重置密码">
                    <div slot="icon" style="opacity: 0;">1</div>
                </el-step>
            </el-steps>
            <el-form :model="forgetFrom" :rules="rules" ref="forgetFrom">
                <template v-if="step===1">
                    <el-form-item prop="phone">
                        <h-input v-model.trim="forgetFrom.phone" maxlength="11" big placeholder="请输入注册时使用的手机号"></h-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input v-model.trim="forgetFrom.code" placeholder="验证码">
                            <div slot="suffix">
                                <div class="wait-time" v-if="time">
                                    {{ time }}s后获取
                                </div>
                                <div class="get-code" v-else @click="getCode">
                                    获取验证码
                                </div>
                            </div>
                        </el-input>
                    </el-form-item>
                </template>
                <template v-else>
                    <el-form-item prop="pwd">
                        <h-input v-model.trim="forgetFrom.pwd" type="password" big placeholder="密码"></h-input>
                    </el-form-item>
                    <el-form-item prop="rpPwd">
                        <h-input v-model.trim="forgetFrom.rpPwd" type="password" big placeholder="确认密码"></h-input>
                    </el-form-item>
                </template>
            </el-form>
            <h-button v-if="step===1" type="primary" @click="findPwd" size="default">找回密码</h-button>
            <h-button v-else type="primary" size="default">确定</h-button>
        </div>
        <div slot="right-text2" @click="$emit('update:currFrom','login')">返回登录</div>
    </login-warp>
</template>

<script>
    export default {
        name: 'forget-content',
        data() {
            // 密码 验证
            const checkPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.forgetFrom.rpPwd !== '') {
                        this.$refs.forgetFrom.validateField('rpPwd')
                    }
                    callback()
                }
            }
            // 二次密码确认 验证
            const checkRpPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'))
                } else if (value !== this.forgetFrom.pwd) {
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
                step: 1,
                // 验证码重新获取时间
                time: 0,
                isGetCode: false,
                forgetFrom: {
                    phone: '',
                    code: '',
                    pwd: '',
                    rpPwd: ''
                },
                rules: {
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
                this.$refs.forgetFrom.validateField('phone')
            },
            // 发生验证码、倒计时 功能
            sendMsg() {
                this.time = 60
                let T = setInterval(() => --this.time || clearInterval(T), 1000)
            },
            // 第一步：找回密码按钮事件
            findPwd() {
                if (this.loading) return
                this.$refs.forgetFrom.validate(valid => {
                    if (valid) {
                        this.step = 2
                    }
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '~style/login';
    .forget-content {
        width: 470px;
        padding: 40px;
        box-sizing: border-box;
        & /deep/ .el-steps {
            margin-bottom: 60px;
            .el-step {
                .el-step__head {
                    .is-text {
                        border-width: 6px;
                    }
                }
                .is-process {
                    font-weight: normal;
                    @include c9;
                    border-color: #ccc;
                }
            }
        }
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
