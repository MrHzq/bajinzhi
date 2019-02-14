/*
 * @Author: hzq
 * @Date: 2019-01-29 17:14:16
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-12 11:08:52
 * @文件说明: 表格组件
 */
<template>
    <el-table class='h-table' :class="{'header-bg':headBg}" v-bind="$attrs" style="width:100%" v-on="listeners">
        <slot></slot>
    </el-table>
</template>

<script>
    export default {
        name: 'h-table',
        props: {
            headBg: {
                type: Boolean,
                default: false
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
    .h-table {
        & /deep/ .el-table__header-wrapper {
            th {
                .cell {
                    @include c9;
                    font-weight: normal;
                }
            }
        }
        & /deep/ .el-table__body-wrapper {
            @include c9;
        }
    }
</style>
