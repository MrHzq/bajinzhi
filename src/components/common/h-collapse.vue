/*
 * @Author: hzq
 * @Date: 2019-01-17 15:27:57
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-14 10:30:35
 * @文件说明: 二级标题组件
 */
<template>
    <div class='h-collapse'>
        <el-collapse :value="close?'0':'1'">
            <el-collapse-item :title="title" name="1">
                <slot></slot>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'h-collapse',
        props: {
            title: {
                type: String,
                default: '二级标题'
            },
            close: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang='scss' scoped>
    .h-collapse {
        & /deep/.el-collapse {
            border-top: none;
            border-bottom: none;
            .el-collapse-item__header {
                height: 48px;
                line-height: 48px;
                margin-bottom: 10px;
                font-size: 15px;
                letter-spacing: 1px;
                border-bottom: none;
            }
            .is-active {
                @include blue;
            }
            .el-collapse-item__wrap {
                border-bottom: none;
                .el-collapse-item__content {
                    padding-bottom: 0;
                }
            }
        }
    }
</style>
