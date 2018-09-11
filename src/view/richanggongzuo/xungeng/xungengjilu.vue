<template>
    <div class="right-content-warp">
        <div class="right-content xun-geng-ji-lu">
            <div class="title">
                <h2>巡更记录</h2>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">巡更路线名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">巡更人员</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="8">
                            <span class="search-label">巡更时间</span>
                            <DatePicker type="datetimerange" confirm placement="bottom-end" style="width: 100%;"></DatePicker>
                        </Col>
                        <Col span="4">
                            <span class="search-label">是否遗漏</span>
                            <Select>
                                <Option :value="1">是</Option>
                                <Option :value="0">否</Option>
                            </Select>
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
        name: "xungengjilu",
        data() {
            return {
                columns: [
                    {
                        title: '巡更路线名称',
                        key: 'pathName'
                    },
                    {
                        title: '巡更人员',
                        key: 'person'
                    },
                    {
                        title: '巡更时间',
                        key: 'time'
                    },
                    {
                        title: '是否遗漏',
                        key: 'isOmit'
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
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.showAdd = true;
                                        }
                                    }
                                }, '查看详情')
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        pathName: '秋冬巡更路线',
                        person: '小明',
                        time: '2018-3-22 12:12:12',
                        isOmit: '正常',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>