/*
 * @Author: hzq
 * @Date: 2019-02-12 17:20:01
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-12 17:43:31
 * @文件说明: 单纯移入手型
 */
<template>
    <div class='h-cursor' v-on="listeners">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'h-cursor',
        computed: {
            listeners() {
                return { ...this.$listeners }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .h-cursor {
        display: inline-block;
        cursor: pointer;
        user-select: none;
    }
</style>
