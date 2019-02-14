/*
 * @Author: hzq
 * @Date: 2019-01-29 13:56:38
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 14:39:00
 * @文件说明: 搜索输入框组件
 */
<template>
    <div class='h-search' @keyup.enter="search" :class="{'inline':inline,'right':right}">
        <el-input v-model.trim="value" v-bind="$attrs" :style="style" @input="value=>$emit('input', value)" size="medium">
            <i slot="suffix" class="el-input__icon el-icon-search" style="cursor:pointer" @click="search"></i>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: 'h-search',
        props: {
            value: {
                type: String,
                default: ''
            },
            width: {
                type: String,
                default: '200'
            },
            inline: {
                type: Boolean,
                default: false
            },
            right: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            style() {
                return {
                    width: this.width + 'px'
                }
            }
        },
        methods: {
            search() {
                this.$emit('search', this.value)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .inline {
        display: inline-block;
    }
    .right {
        text-align: right;
    }
</style>
