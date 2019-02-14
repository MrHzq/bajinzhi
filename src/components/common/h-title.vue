/*
 * @Author: hzq
 * @Date: 2019-02-11 18:14:34
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 16:09:15
 * @文件说明: 页面顶部标题
 */
<template>
    <div class="h-title">
        <div class="left">
            <div class="title">
                <slot>标题</slot>
            </div>
            <div class="other">
                <slot name="other"></slot>
            </div>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default { name: 'h-title' }
</script>

<style lang="scss" scoped>
    .h-title {
        @include flex-b;
        padding: 10px 0;
        margin-bottom: 20px;
        border-bottom: 1px solid $border;
        .left {
            flex: 1;
            @include flex-b;
            .title {
                @include c3;
                @include f16;
            }
            .other {
                margin-left: 21px;
                @include c9;

                cursor: pointer;
            }
        }
    }
</style>
