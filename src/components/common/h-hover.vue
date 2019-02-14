/*
 * @Author: hzq
 * @Date: 2019-02-12 09:43:50
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-14 13:01:47
 * @文件说明: 灰色字体，移入手型变蓝
 */
<template>
    <router-link v-if="to" class='h-hover' :class="[{hover:hover},color]" tag="div" :to="to">
        <slot></slot>
    </router-link>
    <div v-else class='h-hover' :class="[{hover:hover},color]" v-on="listeners">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'h-hover',
        props: {
            to: {
                type: String,
                default: ''
            },
            hover: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'c9'
            }
        },
        computed: {
            listeners() {
                return { ...this.$listeners }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .h-hover {
        display: inline-block;
        cursor: pointer;
        &:hover {
            @include blue;
            & * {
                color: $blue !important;
            }
            .icon-font {
                color: $blue !important;
            }
        }
    }
    .hover {
        color: $blue !important;
    }
</style>
