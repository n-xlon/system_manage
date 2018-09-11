<template>
    <!-- 内容区域 -->
    <div class="has-no-left-nav">
        <div class="layout wrapper-container shujuzl">
            <Layout>
                <Content :style="{padding: '0 50px'}">
                    <div class="page-header-box" :bordered="false">
                        <h3 class="page-header-heading"><img src="../../../images/dataCenter/page01.png" alt=""></h3>
                        <p class="page-header-description"><img src="../../../images/dataCenter/page02.png" alt=""></p>
                    </div>
                    <div class="page-body-box">
                        <Row :gutter="16">
                            <Col span="6">
                                <Card :bordered="false" class="item-list error-color">
                                    <h3 class="num-name">1</h3>
                                    <p class="state-dec">未处理火警</p>
                                    <p class="footer-more"><img src="../../../images/dataCenter/more.png" alt="">
                                    </p>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card :bordered="false" class="item-list warning-color">
                                    <h3 class="num-name">1</h3>
                                    <p class="state-dec">未处理故障</p>
                                   <p class="footer-more"><img src="../../../images/dataCenter/more.png" alt="">
                                    </p>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card :bordered="false" class="item-list success-color">
                                    <h3 class="num-name">1</h3>
                                    <p class="state-dec">今日巡更遗漏</p>
                                   <p class="footer-more"><img src="../../../images/dataCenter/more.png" alt="">
                                    </p>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card :bordered="false" class="item-list info-color">
                                    <h3 class="num-name">1</h3>
                                    <p class="state-dec">今日保修数量</p>
                                   <p class="footer-more"><img src="../../../images/dataCenter/more.png" alt="">
                                    </p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                   <div class="data-center-box">
                       <div class="is-title">
                            <Row>
                                <Col span="20">
                                    <h2>保修管理</h2>
                                </Col>
                            </Row>
                        </div>
                        <div class="data-center-chart">
                            <div class="card-title">
                                <span class="close-icon"><i class="ivu-icon ivu-icon-ios-remove"></i><i class="ivu-icon ivu-icon-ios-close"></i></span>
                            </div>
                            <div id="repairsMonthCount" style="width: 100%; height: 308px;"></div>
                        </div>
                   </div>
                </Content>
                <Footer class="layout-footer-center text-center">
                   <img src="../../../images/dataCenter/Copyright.png" alt="">
                </Footer>
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msg: ''
            }
        },
        mounted() {
            this.repairsMonthCountEcharts();
        },
        methods: {
            repairsMonthCountEcharts() {
                let chart = this.$echarts.init(document.getElementById('repairsMonthCount'))
                let option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        x:25,
                        y:15,
                        x2:15,
                        y2:60,
                    },
                    calculable : true,
                    xAxis : [
                        {
                            interval:0,
                            type : 'category',
                            boundaryGap:true,
                            axisLine: {
                                lineStyle: {
                                    color: '#2AC3FB'
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
                            data : ['2018-01', '2018-02','2018-03','2018-04','2018-05','2018-06', '2018-07', '2018-08']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#2AC3FB'
                                },
                                symbolSize : 4,
                                symbol:['none','arrow'],
                            },
                            axisTick : {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#505765",
                                }
                            }
                        }
                    ],
                    series : [
                        {
                            name:'报修月总数',
                            type:'bar',
                            barGap:0,
                            data:[1, 2, 3, 4, 5, 2, 5, 3],
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
                        },
                    ]
                };
                chart.setOption(option);
                window.addEventListener("resize", function () {
                    chart.resize();
                });
            }
        }
    }
</script>

