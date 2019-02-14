<template>
    <div id="app">
        <router-view v-if="router" />
        <div class="home" v-else>
            <top-nav></top-nav>
            <div class="scrollbar">
                <div class="scrollbar__wrap">
                    <div class="scrollbar__view">
                        <side-nav></side-nav>
                        <div class="router-warp" ref="routerWarp">
                            <!-- <router-tab v-if="$route.name!=='user'"></router-tab> -->
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            router() {
                return this.$alonePageArr.includes(this.$route.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        .home {
            .scrollbar {
                height: calc(100vh - 80px);
                margin-top: 80px;
                overflow: hidden;
                .scrollbar__wrap {
                    height: 100%;
                    overflow: auto;
                    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
                    &::-webkit-scrollbar {
                        width: 0;
                        background-color: #fff;
                    }
                    .scrollbar__view {
                        width: $pageWidth;
                        margin: 0 auto;
                        .router-warp {
                            padding-left: 220px;
                            padding-right: 20px;
                            padding-bottom: 40px;
                        }
                    }
                }
            }
        }
    }
</style>
