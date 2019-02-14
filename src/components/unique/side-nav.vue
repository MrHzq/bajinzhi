/*
 * @Author: hzq
 * @Date: 2019-01-28 09:21:06
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-14 15:48:26
 * @文件说明: 侧边栏导航
 */
<template>
    <div class="side-nav">
        <ul class="nav-ul">
            <router-link tag="li" class="nav-li" v-for="i in sideNav" :key="i.icon" :to="i.parent?'/'+i.parent+'/'+i.to:'/'+i.to" @click.native="$setNav(i.to)">
                <sprite :class="getSpriteClass(i)"></sprite>
                <span>{{ i.name }}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'side-nav',
        data() {
            return {
                sideNav: [
                    {
                        name: '首页',
                        parent: '',
                        to: 'user'
                    }
                ]
            }
        },
        methods: {
            getSpriteClass(i) {
                let index = this.$getNav() === i.to ? '-2' : '-1'
                return 'icon-' + i.to + index
            }
        }
    }
</script>

<style lang="scss" scoped>
    .side-nav {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 220px;
        margin-top: 75px;
        overflow: hidden;
        .nav-ul {
            @include f16;
            @include c3;
            height: 100%;
            overflow: auto;
            .nav-li {
                @include flex-s;
                position: relative;
                height: 60px;
                line-height: 60px;
                padding-left: 34px;
                cursor: pointer;
                span {
                    margin-left: 14px;
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    height: 30px;
                    margin: auto 0;
                    background-color: transparent;
                }
            }
            .router-link-active {
                color: $blue;
                &::before {
                    background-color: $blue;
                }
            }
        }
    }
</style>
