<template>
    <div class="right-content-warp">
        <div class="right-content ping-mian-tu">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>平面图点位管理</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary">添加点位</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">楼宇名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼层名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">设备名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">点位名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">创建时间</span>
                            <DatePicker type="datetime"></DatePicker>
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
        name: "pingmiantu",
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
                        title: '设备名称',
                        key: 'facilityName'
                    },
                    {
                        title: '点位名称',
                        key: 'ptName'
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
                                        type: 'primary',
                                        size: '18'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: '18'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        buildingName: '上海万科国际',
                        floorName: '4F',
                        facilityName: '火灾报警系统',
                        ptName: '门岗',
                        createTime: '2018-8-12 12:33:33',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped type="text/css" >

</style>