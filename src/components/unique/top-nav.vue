/*
 * @Author: hzq
 * @Date: 2019-01-15 09:20:28
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-14 15:54:18
 * @文件说明: 顶部导航
 */
<template>
    <div class='top-nav'>
        <div class="nav-content">
            <div class="logo-div">
                <img src="~@/assets/logo.png" alt="">
            </div>
            <div class="router-tab-warp">
                <router-tab v-show="$route.name!=='user'"></router-tab>
            </div>
            <div class="user-div">
                <el-popover placement="bottom-end" trigger="hover" popper-class="top-nav-msg-popover" :visible-arrow="false">
                    <ul class="top-nav-msg-popover-content">
                        <li v-for="i in msgData" :key="i.msg">
                            <p class="msg-text" :title="i.msg">{{i.msg}}</p>
                            <p class="c9 f12">{{i.time}}</p>
                        </li>
                    </ul>
                    <h-cursor slot="reference">
                        <el-badge :value="12">
                            <ic i="icon-tixing" color="c3" fs="26"></ic>
                        </el-badge>
                    </h-cursor>
                </el-popover>
                <div class="user">
                    <el-popover placement="bottom-end" trigger="hover" popper-class="top-nav-user-popover" :visible-arrow="false">
                        <ul class="top-nav-user-popover-content">
                            <li v-for="i in popoverData" :key="i.name">{{i.name}}</li>
                        </ul>
                        <div slot="reference" class="popover-text">
                            <div class="user-img"></div>
                            <div>
                                <p class="c3 f16">13402318457</p>
                                <p>免费版</p>
                            </div>
                        </div>
                    </el-popover>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'top-nav',
        data() {
            return {
                popoverData: [
                    {
                        name: '我的资料',
                        router: '/user-info'
                    },
                    {
                        name: '升级',
                        router: '/upgrade'
                    },
                    {
                        name: '充值',
                        router: '/recharge'
                    },
                    {
                        name: '退出',
                        router: '/login'
                    }
                ],
                msgData: [
                    {
                        msg: '内容消息，超出隐藏，触摸显示全部信息',
                        time: '2019-2-14 09:11:59'
                    },
                    {
                        msg:
                            '息内容消息内容消息内容消息内容消息内容消息内容消消息内容消息内容消消息内容消息内容消',
                        time: '2019-2-14 09:11:59'
                    },
                    {
                        msg:
                            '内容消息，超出隐藏，触摸显示全部信息消息内容消息内容消消息内容消息内容消消息内容消息内容消消息内容消息内容消',
                        time: '2019-2-14 09:11:59'
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style lang='scss' scoped>
    .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;
        width: 100%;
        background: #fff;
        .nav-content {
            @include flex-b;
            width: $pageWidth;
            height: 80px;
            margin: 0 auto;
            .logo-div {
                width: 220px;
                img {
                    height: 35px;
                }
            }
            .router-tab-warp {
                // margin: 0 50px;
                width: calc(100% - 550px);
                margin-right: 50px;
            }
            .user-div {
                @include flex-s;
                width: 260px;
                margin-right: 20px;
                // margin-left: 50px;
                .user {
                    margin-left: 70px;
                    .popover-text {
                        @include flex;
                        @include c6;
                        cursor: pointer;
                        .user-img {
                            width: 40px;
                            height: 40px;
                            margin-right: 20px;
                            border-radius: 50%;
                            @include bgi(
                                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548216556589&di=c1df9ed220bca6b9b0000b774d22025a&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F00e93901213fb80e72ce3c223bd12f2eb9389423.jpg'
                            );
                        }
                    }
                }
            }
        }
    }
</style>
