/*
 * @Author: hzq
 * @Date: 2019-02-11 13:20:31
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 17:45:35
 * @文件说明: 价格展示组件：￥ + 2位小数点 + 元
 */
<template>
    <div class='h-price'>
        <span :class="color" :style="{'font-size':fs+'px'}">{{$formatPrice(price)}}</span>
        <span class="f12" v-if="!nounit">
            <slot>元</slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'h-price',
        props: {
            price: {
                type: [String, Number]
            },
            nounit: {
                type: Boolean,
                default: false
            },
            fs: {
                type: String,
                default: '18'
            },
            color: {
                type: String,
                default: 'orange'
            }
        }
    }
</script>

<style lang='scss' scoped></style>
