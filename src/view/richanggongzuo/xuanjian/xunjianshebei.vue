<template>
    <div class="right-content-warp">
        <!--add-->
        <div class="right-content xun-jian-she-bei" v-if="showAdd">
            <div class="title">
                <h2>添加巡检设备</h2>
            </div>
            <div class="form-warp">
                <Form :model="addData" label-position="top">
                    <FormItem label="设备所属分类">
                        <Select v-model="addData.type">
                            <Option value="beijing">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="设备名称">
                        <Input v-model="addData.facilityName"/>
                    </FormItem>
                    <FormItem>
                        <Button @click="showAdd = false">取消</Button>
                        <Button type="primary" style="margin-left: 18px" @click="submit">添加</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
        <!--list-->
        <div class="right-content xun-jian-she-bei" v-if="!showAdd">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>巡检设备</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary" @click="showAdd = true">添加设备</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">分类名称</span>
                            <Select>
                                <Option value="pinpai">消防</Option>
                            </Select>
                        </Col>
                        <Col span="4">
                            <span class="search-label">设备名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="8">
                            <span class="search-label">添加时间</span>
                            <DatePicker type="datetimerange" confirm placement="bottom-end" style="width: 100%;"></DatePicker>
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
        name: "xunjianshebei",
        data() {
            return {
                showAdd: false,
                columns: [
                    {
                        title: '分类名称',
                        key: 'type'
                    },
                    {
                        title: '设备名称',
                        key: 'facilityName'
                    },
                    {
                        title: '添加时间',
                        key: 'addTime'
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
                                            this.showAdd = true;
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'info',
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
                        type: '消防',
                        facilityName: '灭火器',
                        addTime: '2018-5-12 12:22:35',
                    },
                ],
                addData: {
                    name: '',
                    type: '',
                },
            }
        },
        methods: {
            submit() {

            },
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>