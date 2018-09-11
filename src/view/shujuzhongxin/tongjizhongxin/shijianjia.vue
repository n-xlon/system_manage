<template>
    <div class="right-content-warp">
        <div class="right-content">
            <div class="title">
                <h2>事件夹记录</h2>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">添加人员名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">描述</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">图片</span>
                            <Input type="text"></Input>
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
        name: "shijianjia",
        data() {
            return {
                columns: [
                    {
                        title: '添加人员名称',
                        key: 'personName'
                    },
                    {
                        title: '描述',
                        key: 'description'
                    },
                    {
                        title: '图片',
                        key: 'lookImage',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                    },
                                    style: {

                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '查看图片'),
                            ]);
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'time'
                    },
                ],
                tableData: [
                    {
                        personName: '小明',
                        description: '共和新路800弄',
                        time: '2018-3-12 12:23:29',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>