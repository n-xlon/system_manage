<template>
    <div class="right-content-warp analysis-page">
        <div class="right-content">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>分析报告</h2>
                    </Col>
                </Row>
            </div>
            <div class="analysis-page-content">
                <Tabs :animated="false" class="analysis-page-tab">
                    <TabPane label="月度报告">
                        <TabPane class="page-content">
                            <Row type="flex" justify="start" class="is-title">
                                <Col span="3"> 项目名称</Col>
                                <Col span="4"><img src="images/airPots.png" alt="">选择节点</Col>
                                <Col span="4">
                                    <div class="is-btn">检 索</div>
                                </Col>
                            </Row>
                            <Table  :columns="columns7" :data="data6"></Table>
                        </TabPane>
                    </TabPane>
                    <TabPane label="季度报告">
                        <TabPane class="page-content">
                            <Row type="flex" justify="start" class="is-title">
                                <Col span="3"> 项目名称</Col>
                                <Col span="4"><img src="images/airPots.png" alt="">选择节点</Col>
                                <Col span="4">
                                    <Button type="primary">检索</Button>
                                </Col>
                            </Row>
                            <Table  :columns="columns7" :data="data6"></Table>
                        </TabPane>
                    </TabPane>
                    <TabPane label="年度报告">
                        <TabPane class="page-content">
                            <Row type="flex" justify="start" class="is-title">
                                <Col span="3"> 项目名称</Col>
                                <Col span="4"><img src="images/airPots.png" alt="">选择节点</Col>
                                <Col span="4">
                                    <Button type="primary">检索</Button>
                                </Col>
                            </Row>
                            <Table  :columns="columns7" :data="data6"></Table>
                        </TabPane>
                    </TabPane>
                </Tabs>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "fenxi",
        data() {
            return {
                columns7: [
                    {
                        title: '编号',
                        key: 'bh',
                        width: 100,
                    },
                    {
                        title: '月度报告名称',
                        key: 'ydbg'
                    },
                    {
                        title: '月份',
                        key: 'yf'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '查看')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        bh: 1,
                        ydbg: '福州软件园消防物联网月度报告（2018年4月）',
                        yf: '4 月'
                    },
                    {
                        bh: '2',
                        ydbg: '福州软件园消防物联网月度报告（2018年4月）',
                        yf: '4 月'
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>