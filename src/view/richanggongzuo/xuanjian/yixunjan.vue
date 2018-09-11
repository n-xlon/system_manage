<template>
    <div class="right-content-warp">
        <div class="right-content xun-jian-ji-hua">
            <div class="title">
                <Row>
                    <Col span="16">
                        <Breadcrumb>
                            <BreadcrumbItem to="/richanggongzuo/xunjianguanli/xunjianjilu"><h2 class="parent-route">巡检计划列表</h2></BreadcrumbItem>
                            <BreadcrumbItem>已巡检任务列表</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                    <Col span="8" class="add-btn-warp">
                        <Button type="primary">导出巡检记录 +</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="8">
                            <span class="search-label">任务时间</span>
                            <DatePicker type="datetimerange" confirm placement="bottom-end" style="width: 100%;"></DatePicker>
                        </Col>
                        <Col span="4">
                            <Button type="info" class="search-btn">检索</Button>
                        </Col>
                    </Row>
                </div>
                <Table :columns="columns" :data="tableData"></Table>
                <Page size="small" :total="tableData.length" show-total show-elevator/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "yixunjian",
        data() {
            return {

                columns: [
                    {
                        title: '计划名称',
                        key: 'planName'
                    },
                    {
                        title: '任务时间',
                        key: 'taskTime'
                    },
                    {
                        title: '完成时间',
                        key: 'finishTime'
                    },
                    {
                        title: '异常设备数',
                        key: 'abnormalTotal'
                    },
                    {
                        title: '遗漏巡检点数',
                        key: 'omitTotal'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '查看任务'),
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        planName: '灭火器月度检查表',
                        taskTime: '2018-5-12 12:22:35',
                        finishTime: '2018-5-12 12:22:35',
                        abnormalTotal: '11',
                        omitTotal: '15',
                    },
                ],
            }
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style lang="scss" type="text/css" scoped>
    .parent-route {
        display: inline-block;
    }
</style>