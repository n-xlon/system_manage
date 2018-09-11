<template>
    <div class="right-content-warp">
        <div class="right-content xujianyilou">
            <div class="title">
                <h2>巡检遗漏</h2>
            </div>
            <div class="table-warp">
                <Table :columns="columns" :data="tableData"></Table>
                <Page size="small" :total="tableData.length" show-total show-elevator/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xunjianyilou",
        data() {
            return {
                columns: [
                    {
                        title: '巡检分类名称',
                        align: 'center',
                        width: 120,
                        className: 'xiaofang'
                    },
                    {
                        title: '巡检表格名称',
                        key: 'tableName'
                    },
                    {
                        title: '任务时间',
                        key: 'createTime'
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
                                }, '查看'),
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        typeName: '消防',
                        tableName: '灭火器月度检查表',
                        createTime: '2018-5-12 12:22:35',
                        omitTotal: '12'
                    },
                    {
                        typeName: '消防',
                        tableName: '灭火器月度检查表',
                        createTime: '2018-5-12 12:22:35',
                        omitTotal: '12'
                    },
                    {
                        typeName: '消防',
                        tableName: '灭火器月度检查表',
                        createTime: '2018-5-12 12:22:35',
                        omitTotal: '12'
                    },
                    {
                        typeName: '消防',
                        tableName: '灭火器月度检查表',
                        createTime: '2018-5-12 12:22:35',
                        omitTotal: '12'
                    },
                ],
            }
        },
        methods: {
            createClassName({row, columnIndex}) {
                console.log(row)
                console.log(columnIndex)
            },
        }
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>