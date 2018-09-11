<template>
    <div class="right-content-warp water-system-page">
        <div class="right-content xun-geng">
            <div class="title">
                <h2>巡更统计</h2>
            </div>
            <div class="form-warp">
                <Row :gutter="10">
                    <Col span="24">
                        <Card class="blue-border">
                            <div class="card-title">
                                <h2>月巡更遗漏趋势</h2>
                            </div>
                            <div id="monthTrend" style="width: 100%; height: 380px;"></div>
                        </Card>
                    </Col>
                </Row>
                <Row :gutter="10" style="margin-top: 10px;">
                    <Col span="24">
                        <Card class="red-border">
                            <div class="card-title">
                                <h2>月巡更平均用时</h2>
                            </div>
                            <div id="averageTime" style="width: 100%; height: 380px;"></div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xungeng",
        mounted() {
            this.monthTrendEcharts();
            this.averageTimeEcharts();
        },
        methods: {
            monthTrendEcharts() {
                let chart = this.$echarts.init(document.getElementById('monthTrend'))
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        x: 55,
                        y: 10,
                        x2: 50,
                        y2: 30,
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#84d2ee'
                            },
                            symbolSize : 4,
                            symbol:['none','arrow'],
                        },
                        axisTick : {
                            show: false
                        },
                        data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08']
                    }],
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#84d2ee'
                            },
                            symbolSize : 4,
                            symbol:['none','arrow'],
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#444D68'
                            },
                        },
                        axisTick : {
                            show: false
                        },
                    },
                    series: [
                        {
                            name: '异常@遗漏',
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                color: '#73ADCE'
                            },
                            data: [800, 210, 212, 224, 460, 200, 212, 230]
                        },
                    ]
                };
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            averageTimeEcharts() {
                let chart = this.$echarts.init(document.getElementById('averageTime'))
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        x: 55,
                        y: 10,
                        x2: 50,
                        y2: 30,
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#84d2ee'
                            },
                            symbolSize : 4,
                            symbol:['none','arrow'],
                        },
                        axisTick : {
                            show: false
                        },
                        data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08']
                    }],
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#84d2ee'
                            },
                            symbolSize : 4,
                            symbol:['none','arrow'],
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#444D68'
                            },
                        },
                        axisTick : {
                            show: false
                        },
                    },
                    series: [
                        {
                            name: '异常@遗漏',
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                color: '#73ADCE'
                            },
                            data: [120, 210, 356, 224, 800, 80, 563, 230]
                        },
                    ]
                };
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
        },
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../../../../sass/shujuzhongxin/tongjizhongxin/xungeng.sass";
</style>