/*
 * @Author: hzq
 * @Date: 2019-01-30 14:11:45
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-11 16:29:53
 * @文件说明: echarts组件
 */
<template>
    <div class='h-echarts' ref="hEcharts" :style="style">
    </div>
</template>

<script>
    export default {
        name: 'h-echarts',
        props: {
            width: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: '300'
            },
            option: {
                type: Object,
                default() {
                    return {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }
                        ]
                    }
                }
            }
        },
        computed: {
            style() {
                return {
                    width: this.width + 'px',
                    height: this.height + 'px'
                }
            }
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(this.$refs.hEcharts)
            // 绘制图表
            myChart.setOption(this.option)
        }
    }
</script>

<style lang='scss' scoped>
    .h-echarts {
        width: 100%;
    }
</style>
