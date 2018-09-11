<template>
    <div class="right-content-warp">
        <div class="right-content xunjianguiji">
            <div class="title">
                <h2>巡检轨迹</h2>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="4">
                            <span class="search-label">巡检表格名称</span>
                            <Input type="text" />
                        </Col>
                        <Col span="4">
                            <span class="search-label">巡检人员</span>
                            <Input type="text" />
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
        name: "xunjianguiji",
        data() {
            return {
                columns: [
                    {
                        title: '数据来源',
                        key: 'source'
                    },
                    {
                        title: '巡检时间',
                        key: 'time'
                    },
                    {
                        title: '巡检人员',
                        key: 'person'
                    },
                    {
                        title: '表格名称',
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
                ],
                tableData: [
                    {
                        source: '灭火器月度检查表',
                        time: '小米',
                        person: '2018-5-12 12:22:35',
                        tableName: '12',
                        buildingName: '12',
                        floorName: '12',
                        address: '12',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>