/*
 * @Author: hzq
 * @Date: 2019-01-25 10:01:21
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 14:27:24
 * @文件说明: 基于el-button封装的按钮
 */
<template>
    <router-link v-if="to" :to="to">
        <el-button class="h-button" :size="size" :style="style" v-bind="$attrs">
            <slot></slot>
        </el-button>
    </router-link>
    <el-button v-else class="h-button" :size="size" :style="style" v-bind="$attrs" v-on="listeners">
        <slot></slot>
    </el-button>
</template>

<script>
    export default {
        name: 'h-button',
        inheritAttrs: false,
        props: {
            width: {
                type: String,
                default: '98'
            },
            fs: {
                type: String,
                default: '14'
            },
            to: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: 'small'
            }
        },
        computed: {
            listeners() {
                return { ...this.$listeners }
            },
            style() {
                return {
                    width: this.width + 'px',
                    fontSize: this.fs + 'px'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .h-button {
        padding-left: 0;
        padding-right: 0;
    }
</style>
