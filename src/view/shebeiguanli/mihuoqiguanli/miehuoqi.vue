<template>
    <div class="right-content-warp">
        <!--add-->
        <div class="right-content mie-huo-qi" v-if="showAdd">
            <div class="title">
                <h2>添加灭火器设备</h2>
            </div>
            <div class="form-warp">
                <Form :model="addData" label-position="left" :label-width="90">
                    <FormItem label="灭火器类型">
                        <Select v-model="addData.type">
                            <Option value="beijing">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="品牌">
                        <Select v-model="addData.brand">
                            <Option value="beijing">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="项目名称">
                        <Select v-model="addData.projectName">
                            <Option value="beijing">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="楼宇">
                        <Select v-model="addData.building">
                            <Option value="beijing">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="楼层">
                        <Select v-model="addData.floor">
                            <Option value="beijing">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="位置">
                        <Input v-model="addData.address"/>
                    </FormItem>
                    <FormItem label="型号">
                        <Input v-model="addData.model"/>
                    </FormItem>
                    <FormItem label="数量">
                        <Input v-model="addData.count"/>
                    </FormItem>
                    <FormItem label="生产日期">
                        <Row>
                            <Col span="6">
                                <DatePicker type="datetime" placeholder="请选择日期" v-model="addData.pdDate"></DatePicker>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button @click="showAdd = false">取消</Button>
                        <Button type="primary" style="margin-left: 18px" @click="submit">添加</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
        <!--list-->
        <div class="right-content mie-huo-qi"  v-if="!showAdd">
            <div class="title">
                <h2>灭火器管理</h2>
            </div>
            <Row class="download-template">
                <Col span="2">
                    <Button type="primary" @click="showAdd = true">添加</Button>
                </Col>
                <Col span="14">
                    <Button type="primary" @click="$router.push('/shebeiguanli/miehuoqiguangli/baofeimiehuoqi')">报废灭火器列表</Button>
                </Col>
                <Col span="4">
                    <Button type="info">下载灭火器导入模板</Button>
                </Col>
                <Col span="4">
                    <span>Excel导入设备 +</span>
                </Col>
            </Row>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">灭火器类型</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">项目</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼宇</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼层</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">位置</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">品牌</span>
                            <Select>
                                <Option value="pinpai">干粉</Option>
                            </Select>
                        </Col>
                        <Col span="4">
                            <span class="search-label">型号</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">数量</span>
                            <Input type="text"/>
                        </Col>
                        <Col span="4">
                            <span class="search-label">生产时间</span>
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
        name: "mihuoqi",
        data() {
            return {
                showAdd: false,
                columns: [
                    {
                        title: '灭火器类型',
                        key: 'type'
                    },
                    {
                        title: '项目名称',
                        key: 'project'
                    },
                    {
                        title: '楼宇',
                        key: 'building'
                    },
                    {
                        title: '楼层',
                        key: 'floor'
                    },
                    {
                        title: '位置',
                        key: 'address'
                    },
                    {
                        title: '品牌',
                        key: 'brand'
                    },
                    {
                        title: '型号',
                        key: 'model'
                    },
                    {
                        title: '数量',
                        key: 'count'
                    },
                    {
                        title: '生产时间',
                        key: 'pdTime'
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
                                }, '报废'),
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
                                }, '修改')
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        type: '干粉灭火器',
                        project: '上海万科',
                        building: '万科大厦',
                        floor: '4F',
                        address: '共和新路800弄',
                        brand: '姚江',
                        model: 'F434332',
                        count: '156',
                        pdTime: '2018-4-12 14:19:34',
                    },
                ],
                addData: {
                    type: '',
                    brand: '',
                    projectName: '',
                    building: '',
                    floor: '',
                    address: '',
                    model: '',
                    count: '',
                    pdDate: '',
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
    @import "../../../../sass/shebeiguanli/miehuoqi.sass";
</style>