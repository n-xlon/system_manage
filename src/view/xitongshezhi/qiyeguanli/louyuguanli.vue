<template>
    <div class="right-content-warp">
        <div class="right-content lou-yu">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>楼宇管理</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary">添加楼宇</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="6">
                            <span class="search-label">建筑物名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="6">
                            <span class="search-label">详细地址</span>
                            <Input type="text"></Input>
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
        name: "louyu",
        data() {
            return {
                columns: [
                    {
                        title: '建筑物名称',
                        key: 'construction'
                    },
                    {
                        title: '详细地址',
                        key: 'address'
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
                                        type: 'warning',
                                        size: 'small'
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
                                        type: 'info',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.showAdd = true;
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        construction: '上海万科国际',
                        address: '共和新路800弄',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped type="text/css">

</style>