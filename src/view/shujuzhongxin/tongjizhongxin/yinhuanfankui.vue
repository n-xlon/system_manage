<template>
    <div class="right-content-warp">
        <div class="right-content">
            <div class="title">
                <h2>隐患反馈</h2>
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
        name: "yinhuanfankui",
        data() {
            return {
                columns: [
                    {
                        title: '楼宇',
                        key: 'building'
                    },
                    {
                        title: '楼层',
                        key: 'floor'
                    },
                    {
                        title: '具体位置',
                        key: 'address'
                    },
                    {
                        title: '紧急程度',
                        key: 'degree'
                    },
                    {
                        title: '隐患描述',
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
                        title: '处理状态',
                        key: 'status'
                    },
                    {
                        title: '反馈时间',
                        key: 'time'
                    },
                    {
                        title: '操作',
                        key: 'detail',
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
                                }, '查看处理结果'),
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        building: '上海万科国际',
                        floor: '3F',
                        address: '贸易路200号',
                        degree: '严重',
                        description: '消防系统故障',
                        status: '未处理',
                        time: '2018-3-11 12:23:10',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>