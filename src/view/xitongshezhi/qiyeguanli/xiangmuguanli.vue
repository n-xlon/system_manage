<template>
    <div class="right-content-warp">
        <div class="right-content project">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>项目管理</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary">新建项目</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">项目名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">省</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">市</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">区县</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
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
        name: "xiangmuguanli",
        data() {
            return {
                columns: [
                    {
                        title: '项目名称',
                        key: 'projectName'
                    },
                    {
                        title: '省',
                        key: 'province'
                    },
                    {
                        title: '市',
                        key: 'city'
                    },
                    {
                        title: '区县',
                        key: 'county'
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
                        projectName: '上海万科国际',
                        province: '上海',
                        city: '上海',
                        county: '静安区',
                        address: '共和新路800弄',
                    },
                    {
                        projectName: '上海万科国际',
                        province: '上海',
                        city: '上海',
                        county: '静安区',
                        address: '共和新路800弄',
                    },
                    {
                        projectName: '上海万科国际',
                        province: '上海',
                        city: '上海',
                        county: '静安区',
                        address: '共和新路800弄',
                    },
                    {
                        projectName: '上海万科国际',
                        province: '上海',
                        city: '上海',
                        county: '静安区',
                        address: '共和新路800弄',
                    },
                    {
                        projectName: '上海万科国际',
                        province: '上海',
                        city: '上海',
                        county: '静安区',
                        address: '共和新路800弄',
                    },
                    {
                        projectName: '上海万科国际',
                        province: '上海',
                        city: '上海',
                        county: '静安区',
                        address: '共和新路800弄',
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../../../../sass/xitongshezhi/xiangmu.sass";
</style>