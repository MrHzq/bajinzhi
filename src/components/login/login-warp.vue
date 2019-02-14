/*
 * @Author: hzq
 * @Date: 2019-01-21 15:11:49
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 14:57:55
 * @文件说明: 登录包含组件
 */
<template>
    <div class='login-warp'>
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <div class="right-text">
                <div>
                    <slot name="right-text1"></slot>
                </div>
                <div class="text">
                    <slot name="right-text2"></slot>
                    <i class="el-icon-back"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login-warp',
        props: {
            h: {
                type: String,
                default: '620'
            }
        }
    }
</script>

<style lang='scss' scoped>
    .login-warp {
        position: relative;
        margin-left: -240px;
        background-color: #fff;
        box-shadow: 0px 7px 27px 0px rgba(51, 152, 255, 0.3);
        border-radius: 20px 0 0 20px;
        .left {
            flex: 1;
            height: 100%;
        }
        .right {
            position: absolute;
            top: 0;
            right: -240px;
            @include flex;
            width: 240px;
            height: 100%;
            color: #fff;
            background-color: $blue;
            border-radius: 0 20px 20px 0;
            .text {
                @include flex;
                @include f16;
                margin-top: 20px;
                font-weight: bold;
                cursor: pointer;
                .el-icon-back {
                    margin-left: 15px;
                    @include f16;
                    transform: rotate(180deg);
                }
            }
        }
    }
</style>
