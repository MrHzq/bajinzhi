/*
 * @Author: hzq
 * @Date: 2019-01-24 14:51:38
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-14 11:46:51
 * @文件说明: 路由tab
 */
<template>
    <div class='router-tab'>
        <el-tabs v-model="currTabIndex" type="card" closable @tab-click="tabClick" @tab-remove="tabRemove">
            <el-tab-pane v-for="(i,index) in routerTabArr" :key="index" :label="i.name" :name="index"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'router-tab',
        computed: mapState(['routerTabArr', 'currTabIndex']),
        methods: {
            tabClick({ name: index }) {
                this.$to(this.routerTabArr[index].route)
            },
            tabRemove(index) {
                this.$store.commit('ROUTERTABDEL', index)
                this.$to(this.routerTabArr[index - 1].route)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .router-tab {
        height: 40px;
        // margin-bottom: 40px;
        background-color: #fff;
        & /deep/ .el-tabs__header {
            margin-bottom: 0;
        }
    }
</style>
