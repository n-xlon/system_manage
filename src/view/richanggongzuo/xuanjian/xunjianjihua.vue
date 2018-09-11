<template>
    <div class="right-content-warp">
        <!--add-->
        <div class="right-content xun-jian-ji-hua" v-if="showAdd">
            <div class="title">
                <h2>新增巡检计划</h2>
            </div>
            <div class="form-warp">
                <Form :model="addData" label-position="left" :label-width="100" class="jihua-form">
                    <Row class="form-top">
                        <FormItem label="巡检计划名称">
                            <Input placeholder="请输入分类名称" v-model="addData.name"/>
                        </FormItem>
                        <FormItem label="巡检周期">
                            <Row :gutter="30" class="periodRow">
                                <Col span="8">
                                    <Select v-model="addData.type">
                                        <Option value="beijing">New York</Option>
                                    </Select>
                                </Col>
                                <Col span="8">
                                    <Select v-model="addData.type" placeholder="请优先选择周期单位">
                                        <Option value="beijing">New York</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="备注">
                            <Input type="textarea" placeholder="请输入备注" v-model="addData.name" :rows="4"/>
                        </FormItem>
                    </Row>
                    <Row class="add-facility-title">
                        <Col span="12">
                            <h2>巡检设备</h2>
                        </Col>
                        <Col span="12">
                            <Button type="info" @click="addFacility">添加巡检设备</Button>
                        </Col>
                    </Row>
                    <Row class="facility" v-for="(item, index) in facilityArr" :key="index">
                        <Card style="width:100%">
                            <FormItem label="巡检设备" class="xj-facility">
                                <Row>
                                    <Col span="14">
                                        <Select v-model="item.facilityName" placeholder="请选择巡检设备">
                                            <Option value="beijing">New York</Option>
                                        </Select>
                                    </Col>
                                    <Col span="9" class="right-btn">
                                        <Button type="info" @click="addTarget(index)">添加巡检指标</Button>
                                        <Button type="warning" @click="removeFacility(index)">删除设备</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            <Row class="target-warp" v-for="(ie, id) in item.targetArr" :key="id">
                                <FormItem label="设备指标">
                                    <Row>
                                        <Col span="14">
                                            <Input placeholder="请输入巡检指标" v-model="ie.targetName"/>
                                        </Col>
                                        <Col span="9" class="right-btn">
                                            <Button type="error" @click="removeTarget(index, id)">删除指标</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="指标类型">
                                    <Row>
                                        <Col span="8">
                                            <Select v-model="ie.targetType" placeholder="请选择指标类型">
                                                <Option value="beijing">New York</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="指标单位">
                                    <Row>
                                        <Col span="8">
                                            <Input placeholder="请输入指标单位" v-model="ie.targetUnit"/>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="指标范围">
                                    <Row>
                                        <Col span="8">
                                            <Select v-model="ie.targetMin" placeholder="请选择">
                                                <Option value="beijing">New York</Option>
                                            </Select>
                                        </Col>
                                        <Col span="1" class="syo">
                                            <span>～</span>
                                        </Col>
                                        <Col span="8">
                                            <Select v-model="ie.targetMax" placeholder="请优先选择周期单位">
                                                <Option value="beijing">New York</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </FormItem>
                            </Row>
                        </Card>
                    </Row>
                    <FormItem>
                        <Button @click="cancelModal">取消</Button>
                        <Button type="primary" style="margin-left: 18px" @click="submit">添加</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
        <!--list-->
        <div class="right-content xun-jian-ji-hua" v-if="!showAdd">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>巡检计划列表</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary" @click="showAdd = true">新增巡检计划</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">巡检计划名称</span>
                            <Input type="text" />
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
        name: "xunjianjihua",
        data() {
            return {
                showAdd: false,
                columns: [
                    {
                        title: '巡检计划名称',
                        key: 'planName'
                    },
                    {
                        title: '创建人',
                        key: 'createUser'
                    },
                    {
                        title: '创建时间',
                        key: 'createTime'
                    },
                    {
                        title: '贴它数量',
                        key: 'stickCount'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 380,
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
                                }, '查看详情'),
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
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '贴它位置'),
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
                        planName: '灭火器月度检查表',
                        createUser: '小米',
                        createTime: '2018-5-12 12:22:35',
                        stickCount: '12'
                    },
                ],
                addData: {

                },
                facilityArr: [
                    {
                        facilityName: '',
                        targetArr: [
                            {
                                targetName: '',
                                targetType: '',
                                targetUnit: '',
                                targetMin: '',
                                targetMax: '',
                            }
                        ],
                    }
                ],
            }
        },
        computed: {
          tar()  {
              console.log(this.facilityArr)
          }
        },
        methods: {
            addFacility() {
                let facility = {
                    facilityName: '',
                    targetArr: [

                    ],
                };
                this.facilityArr.push(facility);
                facility = null;
            },
            removeFacility(index) {
                this.facilityArr.splice(index, 1);
            },
            addTarget(index) {
                let target = {
                    targetName: '',
                    targetType: '',
                    targetUnit: '',
                    targetMin: '',
                    targetMax: '',
                };
                this.facilityArr[index].targetArr.push(target);
                target = null;
            },
            removeTarget(index, id) {
                this.facilityArr[index].targetArr.splice(id, 1);
            },
            submit() {
                console.log(this.facilityArr)
            },
            cancelModal() {
                this.showAdd = false;
                this.facilityArr = [];
            },
        },
    }
</script>

<style lang="scss" type="text/css" scoped>
    @import "../../../../sass/richanggongzuo/xunjianjihua.sass";
</style>