<template>
    <div class="right-content-warp">
        <!--add-->
        <div class="right-content xun-jian-fen-lei" v-if="showAdd">
            <div class="title">
                <h2>新增巡检分类</h2>
            </div>
            <div class="form-warp">
                <Form :model="addData" label-position="top">
                    <FormItem label="自定义巡检分类名称">
                        <Input v-model="addData.name"/>
                    </FormItem>
                    <FormItem label="选择系统巡检分类">
                        <RadioGroup v-model="addData.type">
                            <Radio label="xf">消防</Radio>
                            <Radio label="af">安防</Radio>
                            <Radio label="bj">保洁</Radio>
                            <Radio label="dt">电梯</Radio>
                            <Radio label="pdj">配电间</Radio>
                            <Radio label="kt">空调</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Button @click="showAdd = false">取 消</Button>
                        <Button type="primary" style="margin-left: 18px" @click="submit">添 加</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
        <!--list-->
        <div class="right-content xun-jian-fen-lei" v-if="!showAdd">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>巡检分类</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary" @click="showAdd = true">添加分类</Button>
                    </Col>
                </Row>
            </div>
            <div class="card-warp">
                <Row :gutter="10">
                    <Col span="6" v-for="(item, index) in category" :key="index">
                        <Card>
                            <Row class="card-top">
                                <Col span="12">
                                    <span>分类名称：</span>
                                </Col>
                                <Col span="12">
                                    <span>{{item.name}}</span>
                                </Col>
                            </Row>
                            <Row class="card-bottom">
                                <Col span="12">
                                    <h4>巡检设备</h4>
                                    <p>{{item.facility}}</p>
                                </Col>
                                <Col span="12">
                                    <h4>巡检计划</h4>
                                    <p>{{item.plan}}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xunjianfenlei",
        data() {
            return {
                showAdd: false,
                category: [
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
                    },
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
                    },
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
                    },
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
                    },
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
                    },
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
                    },
                    {
                        name: '消防',
                        facility: '2',
                        plan: '4',
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
    @import "../../../../sass/richanggongzuo/xunjianfenlei.sass";
</style>