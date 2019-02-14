/*
 * @Author: hzq
 * @Date: 2019-01-15 15:42:00
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-12 15:15:03
 * @文件说明: 阿里巴巴-字体图标组件
 */
<template>
    <router-link v-if="to" class="icon-font" :to="to" tag="span">
        <i class='iconfont' :class="i" :style="style"></i>
    </router-link>
    <i v-else class='iconfont' :class="i" :style="style" v-on="listeners"></i>
</template>

<script>
    export default {
        name: 'icon-font',
        inheritAttrs: false,

        props: {
            i: {
                type: String,
                default: 'icon-bianji'
            },
            fs: {
                type: String,
                default: '16'
            },
            color: {
                type: String,
                default: 'c9'
            },
            cursor: {
                type: Boolean,
                default: false
            },
            to: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                colorData: {
                    blue: '#3398ff',
                    grey: '#e4e7ed',
                    orange: '#ee6869',
                    green: '#13ce66',
                    c3: '#333',
                    c6: '#666',
                    c9: '#999'
                }
            }
        },
        computed: {
            listeners() {
                return { ...this.$listeners }
            },
            style() {
                return {
                    fontSize: this.fs + 'px',
                    cursor: this.cursor ? 'pointer' : 'inherit',
                    color: this.colorData[this.color] || this.color
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icon-font {
        cursor: pointer;
        user-select: none;
        // &:hover {
        //     color: $blue !important;
        //     .iconfont {
        //         color: $blue !important;
        //     }
        // }
    }
</style>
