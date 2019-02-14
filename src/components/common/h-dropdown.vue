/*
 * @Author: hzq
 * @Date: 2019-01-29 15:33:45
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-12 11:15:09
 * @文件说明: 下拉菜单
 */
<template>
    <el-dropdown class='h-dropdown' trigger="click" v-bind="$attrs" v-on="listeners">
        <span class="el-dropdown-link">
            <slot>下拉菜单</slot>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="i in dropdown" :key="i.command" :command="i.command">
                <router-link v-if="i.to" tag="div" :to="i.to">{{i.name}}</router-link>
                <div v-else>{{i.name}}</div>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        name: 'h-dropdown',
        props: {
            dropdown: {
                type: Array,
                default() {
                    return [
                        {
                            command: 'a',
                            name: '黄金糕'
                        }
                    ]
                }
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
    .h-dropdown {
        .el-dropdown-link {
            cursor: pointer;
            color: $c9;

            &:hover {
                color: $blue;
            }
            .el-icon-arrow-down {
                margin-left: 0;
            }
        }
    }
</style>
