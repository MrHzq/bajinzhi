/*
 * @Author: hzq
 * @Date: 2019-01-31 15:38:18
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-12 13:21:23
 * @文件说明: 无边框的下拉框
 */
<template>
    <el-select class='h-select' v-model="value" @change="val=>$emit('change',val)" v-bind="$attrs" :style="style">
        <el-option v-for="i in option" :key="i.value" :label="i.label" :value="i.value" :disabled="i.disabled">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: 'h-select',
        model: {
            event: 'change'
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            option: {
                type: Array,
                default() {
                    return []
                }
            },
            width: {
                type: String,
                default: ''
            }
        },
        computed: {
            style() {
                return {
                    width: this.width + 'px'
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .h-select {
        & /deep/ .el-input__inner {
            border: none;
            color: inherit;
            background-color: transparent;
            &::-webkit-input-placeholder {
                @include c3;
            }
        }
        & /deep/ .is-disabled {
            .el-input__inner {
                cursor: default;
            }
            .el-input__suffix {
                display: none;
            }
        }
    }
</style>
