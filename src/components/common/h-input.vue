/*
 * @Author: hzq
 * @Date: 2019-02-13 14:17:31
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 17:42:59
 * @文件说明: 输入框组件
 */
<template>
    <el-input class='h-input' v-model="value" :style="style" :size="big?'default':'medium'" v-bind="$attrs" v-on="listeners">
        <slot></slot>
    </el-input>
</template>

<script>
    export default {
        name: 'h-input',
        props: {
            value: String,
            width: {
                type: String,
                default: ''
            },
            big: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: val => this.$emit('input', val)
                }
            },
            style() {
                return {
                    width: this.width + 'px'
                }
            }
        }
    }
</script>

<style lang='scss' scoped></style>
