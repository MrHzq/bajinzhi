/*
 * @Author: hzq
 * @Date: 2019-02-11 14:45:52
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 15:42:49
 * @文件说明: h-switch组件
 */
<template>
    <div class='h-switch'>
        <el-switch v-bind="$attrs" v-model="value" @change="val=>$emit('change',val)" active-color="#13ce66" size="mini">
        </el-switch>
    </div>
</template>

<script>
    export default {
        name: 'h-switch',
        model: {
            event: 'change'
        },
        props: ['value'],
        methods: {}
    }
</script>

<style lang='scss' scoped>
    .h-switch {
    }
</style>
