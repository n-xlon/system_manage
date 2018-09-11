<template>
    <div class="right-content-warp">
        <!--detail-->
        <div class="right-content xunjianyichang" v-if="showDetail">
            <div class="title">
                <h2>巡检异常处理情况</h2>
            </div>
            <div class="form-warp">
                <Row>
                    <Col span="4"><span>计划名称</span></Col>
                    <Col span="20"><span>{{detail.planName}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>任务时间</span></Col>
                    <Col span="20"><span>{{detail.taskTime}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>楼宇名称</span></Col>
                    <Col span="20"><span>{{detail.buildingName}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>楼层名称</span></Col>
                    <Col span="20"><span>{{detail.floorName}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>巡检位置</span></Col>
                    <Col span="20"><span>{{detail.address}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>设备名称</span></Col>
                    <Col span="20"><span>{{detail.facilityName}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>指标1</span></Col>
                    <Col span="20"><span>{{detail.target}}</span></Col>
                </Row>
                <Row>
                    <Col span="4"><span>异常图片</span></Col>
                    <Col span="20" style="margin: 20px 0">
                        <img src="../../../../images/ycpic.png" alt="1" width="198" height="112">
                        <img src="../../../../images/ycpic.png" alt="2" width="198" height="112">
                    </Col>
                </Row>
                <Row>
                    <Col span="4"><span>处理结果</span></Col>
                    <Col span="20">
                        <Input type="textarea" :rows="4" placeholder="尚未处理，请输入处理结果进行处理"/>
                    </Col>
                </Row>
                <Row>
                    <Col span="20" offset="4">
                        <Button @click="showDetail = false">取 消</Button>
                        <Button type="primary" style="margin-left: 18px" @click="submit">处 理</Button>
                    </Col>
                </Row>
            </div>
        </div>
        <!--list-->
        <div class="right-content xunjianyichang" v-if="!showDetail">
            <div class="title">
                <h2>巡检异常记录</h2>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">巡检分类名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">巡检表格名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼宇名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼层名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">巡检位置</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">信息处理</span>
                            <Select>
                                <Option value="pinpai">待处理</Option>
                            </Select>
                        </Col>
                        <Col span="8">
                            <span class="search-label">巡检时间</span>
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
        name: "xunjianyichang",
        data() {
            return {
                showDetail: false,
                columns: [
                    {
                        title: '巡检分类名称',
                        key: 'typeName'
                    },
                    {
                        title: '巡检表格名称',
                        key: 'tableName'
                    },
                    {
                        title: '楼宇名称',
                        key: 'buildingName'
                    },
                    {
                        title: '楼层名称',
                        key: 'floorName'
                    },
                    {
                        title: '巡检位置',
                        key: 'address'
                    },
                    {
                        title: '巡检时间',
                        key: 'time'
                    },
                    {
                        title: '信息处理',
                        key: 'message'
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
                                        type: 'md-eye',
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showDetail = true;
                                        }
                                    }
                                }, '查看异常'),
                            ]);
                        }
                    },
                ],
                tableData: [
                    {
                        typeName: '消防',
                        tableName: '消火栓巡检',
                        buildingName: '数字产业大厦',
                        floorName: '2F',
                        address: '共和新路800弄',
                        time: '2018-12-2 12:22:22',
                        message: '待处理',
                    },
                ],
                detail: {
                    planName: '消火栓箱检查表',
                    taskTime: '06-04 00:00:00--06-04 23:59:59',
                    buildingName: '体育馆',
                    floorName: '24F',
                    address: '走廊尽头拐角',
                    facilityName: '消火栓箱',
                    target: '外观是否正常无破损？（异常）',
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
    @import "../../../../sass/richanggongzuo/xunjianyichang.sass";
</style>