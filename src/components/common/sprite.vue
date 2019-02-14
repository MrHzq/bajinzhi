/*
 * @Author: hzq
 * @Date: 2019-01-28 10:08:41
 * @Last Modified by: hzq
 * @Last Modified time: 2019-01-28 15:42:44
 * @文件说明: 雪碧图组件
 */
<template>
    <div class='sprite' v-bind="$attrs"></div>
</template>

<script>
    export default { name: 'sprite' }
</script>

<style lang='scss' scoped>
    @import '~@/style/sprites';
    .sprite {
        display: inline-block;
    }
</style>
