/*
 * @Author: hzq
 * @Date: 2019-01-18 14:09:29
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 16:08:31
 * @文件说明: 小提示--icon+文字
 */
<template>
    <div class='h-tip'>
        <el-tooltip effect="dark" :placement="placement">
            <ic :i="icon" :color="color" cursor></ic>
            <div slot="content">
                <slot>提示文字</slot>
            </div>
        </el-tooltip>
    </div>
</template>

<script>
    export default {
        name: 'h-tip',
        props: {
            placement: {
                type: String,
                default: 'right'
            },
            icon: {
                type: String,
                default: 'icon-wenhao'
            },
            color: {
                type: String,
                default: '#999'
            }
        }
    }
</script>
