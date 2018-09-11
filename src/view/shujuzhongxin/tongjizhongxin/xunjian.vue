<template>
    <div class="right-content-warp water-system-page">
        <div class="right-content xun-jian">
            <div class="title">
                <h2>巡检统计</h2>
            </div>
            <div class="form-warp">
                <Row :gutter="10">
                    <Col span="24">
                        <Card>
                            <div class="card-title">
                                <h2>月巡检异常及遗漏趋势</h2>
                            </div>
                            <div id="monthTrend" style="width: 100%; height: 380px;"></div>
                        </Card>
                    </Col>
                </Row>
                <Row :gutter="10" style="margin-top: 20px;">
                    <Col span="12">
                        <Card>
                            <div class="card-title">
                                <h2>当月巡检异常占比</h2>
                            </div>
                            <div class="echarts-warp">
                                <div class="pic-echarts-warp">
                                    <div id="abnormalRatio" class="pic-echarts" style="width: 183px; height: 183px;"></div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card>
                            <div class="card-title">
                                <h2>当月巡检遗漏占比</h2>
                            </div>
                            <div class="echarts-warp">
                                <div class="pic-echarts-warp">
                                    <div id="omitRatio" class="pic-echarts" style="width: 183px; height: 183px;"></div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xunjian",
        mounted() {
            this.monthTrendEcharts();
            this.abnormalRatioEcharts();
            this.omitRatioEcharts();
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
                            data: [320, 210, 540, 280, 360, 450, 578, 788]
                        },
                    ]
                };
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            abnormalRatioEcharts() {
                let chart = this.$echarts.init(document.getElementById('abnormalRatio'))
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['#F56954'],
                    series: [
                        {
                            name: '巡检异常',
                            type: 'pie',
                            radius: ['60%', '88%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                normal: {
                                    borderColor: "(150, 206, 218, 0.1)",
                                    borderWidth: 1,
                                }
                            },
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 203, name: '异常'},
                            ]
                        }
                    ]
                }
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            omitRatioEcharts() {
                let chart = this.$echarts.init(document.getElementById('omitRatio'))
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['#FFCE44'],
                    series: [
                        {
                            name: '巡检遗漏',
                            type: 'pie',
                            radius: ['60%', '88%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                normal: {
                                    borderColor: "(150, 206, 218, 0.1)",
                                    borderWidth: 1,
                                }
                            },
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 203, name: '遗漏'},
                            ]
                        }
                    ]
                }
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
        },
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../../../../sass/shujuzhongxin/tongjizhongxin/xunjian.sass";
</style>