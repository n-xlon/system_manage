<template>
    <div class="right-content-warp">
        <!--list-->
        <div class="right-content xun-geng-lu-xian" v-if="showAdd">
            <div class="title">
                <h2>添加巡更路线</h2>
            </div>
            <div class="form-warp">
                <Form :model="formItem" label-position="top">
                    <FormItem label="巡更路线名称">
                        <Input v-model="formItem.name"/>
                    </FormItem>
                    <FormItem label="巡更点名称">
                        <Transfer
                                :data="data1"
                                :target-keys="targetKeys1"
                                :render-format="render1"
                                @on-change="handleChange1"></Transfer>
                    </FormItem>
                    <FormItem>
                        <Button @click="showAdd = false">取 消</Button>
                        <Button type="primary" @click="saveForm" style="margin-left: 18px;">保 存</Button>
                    </FormItem>
                </Form>
            </div>
        </div>

        <!--add-->
        <div class="right-content xun-geng-lu-xian" v-if="!showAdd">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>巡更路线管理</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary" @click="showAdd = true">添加巡更路线</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="6">
                            <span class="search-label">巡更路线名称</span>
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
        name: "xungengluxian",
        data() {
            return {
                showAdd: false,
                data1: this.getMockData(),
                targetKeys1: [],
                columns: [
                    {
                        title: '巡更路线名称',
                        key: 'name'
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

                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        name: '元旦巡更',
                    },
                ],
                formItem: {
                    name: ''
                }
            }
        },
        methods: {
            saveForm() {

            },
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                    });
                }
                return mockData;
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            },
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>