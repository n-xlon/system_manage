<template>
    <div class="right-content-warp">
        <div class="right-content xun-jian-ji-hua">
            <div class="title">
                <Row>
                    <Col span="24">
                        <Breadcrumb>
                            <BreadcrumbItem to="/richanggongzuo/xunjianguanli/xunjianjilu"><h2 class="parent-route">巡检计划列表</h2></BreadcrumbItem>
                            <BreadcrumbItem>巡检记录</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">表格名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">分类名称</span>
                            <Select>
                                <Option value="pinpai">消防</Option>
                            </Select>
                        </Col>
                        <Col span="4">
                            <span class="search-label">周期频次</span>
                            <Select>
                                <Option value="pinpai">4</Option>
                            </Select>
                        </Col>
                        <Col span="4">
                            <span class="search-label">创建时间</span>
                            <DatePicker type="datetime" confirm placement="bottom-end" style="width: 100%;"></DatePicker>
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
        name: "renwujilu",
        data() {
            return {
                columns: [
                    {
                        title: '表格名称',
                        key: 'tableName'
                    },
                    {
                        title: '分类名称',
                        key: 'className'
                    },
                    {
                        title: '周期频次',
                        key: 'period'
                    },
                    {
                        title: '创建时间',
                        key: 'createTime'
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
                        tableName: '灭火器月度检查表',
                        createUser: '消防',
                        period: '4天一次',
                        createTime: '2018-5-12 12:22:35',
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