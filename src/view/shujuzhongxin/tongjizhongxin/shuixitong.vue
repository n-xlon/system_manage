<template>
    <div class="right-content-warp water-system-page">
        <div class="right-content">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>消防水系统监测统计</h2>
                    </Col>
                </Row>
            </div>
            <div class="layout">
                <Layout :style="{padding: '0 20px'}">
                    <Content>
                        <Layout>
                            <Row>
                                <Col span="3">
                                    <div class="water-system-sider">
                                        <ul class="menu">
                                            <h3 class="menu-item-title">选择楼宇</h3>
                                            <li class="menu-item-group">
                                                <img src="../../../../images/waterSystem/circular.png" alt="">
                                                <img src="../../../../images/waterSystem/Building_icon.png" alt="">
                                                A 栋
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col span="21">
                                    <div class="water-system-right">
                                        <p class="is-title"><img src="images/airPots.png" alt="">选择节点</p>
                                        <div class="is-tag">消防水泵房</div>
                                        <Card class="water-item-box" :bordered="false">
                                            <p class="is-title">传感器类型</p>
                                            <div class="is-tag">喷淋泵出水压力液压</div>
                                            <div class="is-tag">消防泵出水压力液压</div>
                                            <div class="water-system-chart">
                                                <div id="myChart" style="width: 100%; height: 100%;"></div>
                                            </div>
                                        </Card>

                                    </div>

                                </Col>
                            </Row>
                        </Layout>
                    </Content>
                </Layout>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'shuititong',
        data() {
            return {
                msg: ''
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        x: 55,
                        y: 10,
                        x2: 15,
                        y2: 30,
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisTick : {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2AC3FB'
                            },
                            symbolSize : 4,
                            symbol:['none','arrow']
                        },
                        data: ['08-26  00', '08-26  04', '08-26  08', '08-26  12', '08-26  16']
                    }],
                    yAxis: {
                        type: 'value',
                        axisTick : {
                            show: false
                        },
                        splitLine: {
                            show:false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2AC3FB'
                            },
                            symbolSize : 4,
                            symbol:['none','arrow']
                        }
                    },
                    series: [{
                        name: '火警总数',
                        type: 'line',
                        smooth: false,
                        itemStyle: {
                            normal: {
                                color: "rgba(42,195,251,0.23)"
                            }
                        },
                        lineStyle: {
                            width: 1,
                            color: 'rgba(42,195,251,0.23)'
                        },
                        areaStyle: {
                            color: 'rgba(42,195,251,0.23)'
                        },
                        symbolSize : 2,
                        data: [320, 210, 540, 280, 360]
                    },
                    ]
                })
            }
        }
    }
</script>

<style scoped>

</style>