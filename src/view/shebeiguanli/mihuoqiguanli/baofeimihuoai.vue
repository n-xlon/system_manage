<template>
    <div class="right-content-warp">
        <div class="right-content baoFei-mie-huo-qi">
            <div class="title">
                <Breadcrumb>
                    <BreadcrumbItem to="/shebeiguanli/miehuoqiguangli/miehuoqi"><h2 class="parent-route">灭火器管理</h2></BreadcrumbItem>
                    <BreadcrumbItem>报废灭火器列表</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">灭火器类型</span>
                            <Select>
                                <Option value="pinpai">干粉</Option>
                            </Select>
                        </Col>
                        <Col span="4">
                            <span class="search-label">项目名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼宇名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">楼层名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">位置</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">品牌ID</span>
                            <Select>
                                <Option value="pinpai">干粉</Option>
                            </Select>
                        </Col>
                        <Col span="4">
                            <span class="search-label">型号</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">报废数量</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="4">
                            <span class="search-label">描述</span>
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
        name: "baofeimihuoai",
        data() {
            return {
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
                        title: '描述',
                        key: 'description'
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
                        description: '报废',
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
                    pdTime: '',
                },
            }
        },
    }
</script>

<style lang="scss" type="text/css" scoped>
    .parent-route {
        display: inline-block;
    }
</style>