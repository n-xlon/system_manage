<template>
    <div class="right-content-warp">
        <div class="right-content">
            <div class="title">
                <h2>维修记录</h2>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">楼宇名称</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼层名称</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">巡检点位置</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">设备名称</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">任务状态</span>
                            <Select>
                                <Option value="xin">新保修</Option>
                                <Option value="runing">维修中</Option>
                                <Option value="finsh">已完成</Option>
                            </Select>
                        </Col>
                        <Col span="8">
                            <span class="search-label">创建时间</span>
                            <DatePicker type="datetimerange" confirm placement="bottom-end" style="width: 100%;"></DatePicker>
                        </Col>
                        <Col span="2">
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
        name: "weixiu",
        data() {
            return {
                columns: [
                    {
                        title: '楼宇名称',
                        key: 'buildingName'
                    },
                    {
                        title: '楼层名称',
                        key: 'floorName'
                    },
                    {
                        title: '巡检点位置',
                        key: 'address'
                    },
                    {
                        title: '设备名称',
                        key: 'facilityName'
                    },
                    {
                        title: '任务状态',
                        key: 'status'
                    },
                    {
                        title: '创建时间',
                        key: 'time'
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
                                            this.showDetail = true;
                                        }
                                    }
                                }, '查看详情'),
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        buildingName: '数字产业大厦',
                        floorName: '2F',
                        address: '电梯',
                        facilityName: '灭火器',
                        status: '维修中',
                        time: '2018-12-2 12:22:22',
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>