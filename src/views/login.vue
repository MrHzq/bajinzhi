/*
 * @Author: hzq
 * @Date: 2019-01-25 15:11:13
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 14:57:21
 * @文件说明: 登陆页面
 */
<template>
    <div class="login">
        <transition name="translate-fade" mode="out-in">
            <component v-bind:is="currFrom + '-content'" :currFrom.sync="currFrom"></component>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                // 当前表单：login|register|forget
                currFrom: 'login'
            }
        },
        created() {
            sessionStorage.clear()
        }
    }
</script>

<style lang="scss" scoped>
    .translate-fade-enter-active,
    .translate-fade-leave-active {
        transition: all 0.8s;
    }
    .translate-fade-enter,
    .translate-fade-leave-active {
        opacity: 0;
    }
    .translate-fade-enter {
        transform: translateX(300px);
    }
    .translate-fade-leave-active {
        transform: translateX(-300px);
    }
    .login {
        @include flex;
        position: relative;
        width: 100%;
        height: 100vh;
        @include bgi('~assets/login-bg.png');
        overflow: hidden;
    }
</style>
