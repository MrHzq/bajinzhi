/*
 * @Author: chenjie
 * @Date: 2019-01-21 14:24:19
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 16:44:08
 * @文件说明: 分页
 */
<template>
    <div class='h-page'>
        <el-pagination :current-page="currPage" :total="total" :page-size="pageSize" :layout="layout" v-bind="$attrs" v-on="listeners">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'h-page',
        inheritAttrs: false,
        props: {
            currPage: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 140
            },
            pageSize: {
                type: Number,
                default: 20
            }
        },
        computed: {
            listeners() {
                return { ...this.$listeners }
            },
            layout() {
                let layout = 'total, prev, pager, next'
                if (this.total / this.pageSize > 7) layout += ', jumper'
                return layout
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang='scss' scoped>
    .h-page {
        margin-top: 30px;
        & /deep/ .el-pagination {
            @include c9;
            font-weight: normal;
        }
        & /deep/ .el-pagination__total {
            @include c9;
        }
    }
</style>
