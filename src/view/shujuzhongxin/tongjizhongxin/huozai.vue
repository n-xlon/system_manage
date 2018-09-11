<template>
    <div class="right-content-warp">
        <div class="right-content huo-zai">
            <div class="title">
                <h2>报警统计</h2>
            </div>
            <div class="form-warp">
                <Row :gutter="10">
                    <Col span="12" class="host-count">
                        <Card>
                            <div class="card-title">
                                <h2>报警主机信息统计</h2>
                                <span class="close-icon"><i class="ivu-icon ivu-icon-ios-remove"></i><i class="ivu-icon ivu-icon-ios-close"></i></span>
                            </div>
                            <div class="echarts-warp">
                                <div class="pic-echarts-warp">
                                    <div id="alarmHost" class="pic-echarts" style="width: 183px; height: 183px;"></div>
                                </div>
                            </div>
                        </Card>
                        <Row class="count-warp">
                            <Col span="12">
                                <p>203</p>
                                <p>火警信息反馈统计</p>
                            </Col>
                            <Col span="12">
                                <p>39</p>
                                <p>故障总数</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="12" class="fire-alarm">
                        <Card>
                            <div class="card-title">
                                <h2>火警故障月数量</h2>
                                <span class="close-icon"><i class="ivu-icon ivu-icon-ios-remove"></i><i class="ivu-icon ivu-icon-ios-close"></i></span>
                            </div>
                            <div id="fireAlarmCount" style="width: 100%; height: 168px;"></div>
                        </Card>
                        <Card style="margin-top: 10px;">
                            <div class="card-title">
                                <h2>火警故障月趋势</h2>
                                <span class="close-icon"><i class="ivu-icon ivu-icon-ios-remove"></i><i class="ivu-icon ivu-icon-ios-close"></i></span>
                            </div>
                            <div id="fireAlarmTendency" style="width: 100%; height: 169px;"></div>
                        </Card>
                    </Col>
                </Row>
                <Row :gutter="10" style="margin-top: 10px;">
                    <Col span="12">
                        <Card>
                            <div class="card-title">
                                <h2>报警信息反馈统计</h2>
                                <span class="close-icon"><i class="ivu-icon ivu-icon-ios-remove"></i><i class="ivu-icon ivu-icon-ios-close"></i></span>
                            </div>
                            <div class="echarts-warp">
                                <div class="legend alarm">
                                    <p>真实</p>
                                    <p>误报</p>
                                    <p>检测</p>
                                    <p>未处理</p>
                                </div>
                                <div class="pic-echarts-warp">
                                    <div class="pic-echarts" id="alarmMsgCount" style="width: 183px; height: 183px;"></div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card>
                            <div class="card-title">
                                <h2>故障信息反馈统计</h2>
                                <span class="close-icon"><i class="ivu-icon ivu-icon-ios-remove"></i><i class="ivu-icon ivu-icon-ios-close"></i></span>
                            </div>
                            <div class="echarts-warp">
                                <div class="legend fault">
                                    <p>已处理</p>
                                    <p>未处理</p>
                                </div>
                                <div class="pic-echarts-warp">
                                    <div class="pic-echarts" id="faultMsgCount" style="width: 183px; height: 183px;"></div>
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
        name: "huozai",
        mounted() {
            this.alarmHostEcharts();
            this.fireAlarmCountEcharts();
            this.fireAlarmTendencyEcharts();
            this.alarmMsgCountEcharts();
            this.faultMsgCountEcharts();
        },
        methods: {
            alarmHostEcharts() {
                let chart = this.$echarts.init(document.getElementById('alarmHost'))
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['#B6EEFD', '#2AC1F9'],
                    series: [
                        {
                            name: '报警主机信息',
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
                                {value: 203, name: '火警总数'},
                                {value: 39, name: '故障总数'},
                            ]
                        }
                    ]
                }
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            fireAlarmCountEcharts() {
                let chart = this.$echarts.init(document.getElementById('fireAlarmCount'))
                let option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    grid: {
                        x:55,
                        y:15,
                        x2:15,
                        y2:30,
                    },
                    calculable : true,
                    xAxis : [
                        {
                            interval:0,
                            type : 'category',
                            boundaryGap:true,
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
                            axisPointer: {
                                type: 'shadow'
                            },
                            data : ['2018-02','2018-03','2018-04','2018-05','2018-06', '2018-07', '2018-08']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
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
                        }
                    ],
                    series : [
                        {
                            name:'火警总数',
                            type:'bar',
                            barGap:0,
                            data:[2300,900,4000,2000,5000, 1800, 1200],
                            itemStyle:{
                                normal:{color:'rgba(182,238,253,.4)'},
                            }
                        },
                        {
                            name:'故障总数',
                            type:'bar',
                            barGap:'.2%,',
                            data:[200, 500, 900, 200, 200, 500, 300],
                            itemStyle:{
                                normal:{color:'rgba(42,195,251,.4)'},
                            }
                        },
                    ]
                };
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            fireAlarmTendencyEcharts() {
                let chart = this.$echarts.init(document.getElementById('fireAlarmTendency'))
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        x:55,
                        y:15,
                        x2:45,
                        y2:30,
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
                        data: ['2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08']
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
                    series: [{
                        name: '火警总数',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            color: '#D2D6DE'
                        },
                        data: [320, 210, 540, 280, 360, 450, 578]
                    },
                        {
                            name: '故障总数',
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                color: '#68A7CA'
                            },
                            data: [60, 60, 338, 257, 220, 220, 220]
                        }
                    ]
                };
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            alarmMsgCountEcharts() {
                let chart = this.$echarts.init(document.getElementById('alarmMsgCount'))
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['#562AF9', '#8895C8', '#2E9BCA', '#B3EBF9'],
                    series: [
                        {
                            name: '报警主机信息',
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
                                {value: 203, name: '真实'},
                                {value: 12, name: '误报'},
                                {value: 123, name: '检测'},
                                {value: 80, name: '未处理'},
                            ]
                        }
                    ]
                }
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            },
            faultMsgCountEcharts() {
                let chart = this.$echarts.init(document.getElementById('faultMsgCount'))
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['#2AC1F9', '#B6EEFD'],
                    series: [
                        {
                            name: '报警主机信息',
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
                                {value: 203, name: '已处理'},
                                {value: 39, name: '未处理'},
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
    @import "../../../../sass/shujuzhongxin/tongjizhongxin/huozai.sass";
</style>