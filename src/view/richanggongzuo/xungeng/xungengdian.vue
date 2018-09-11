<template>
    <div class="right-content-warp">
        <div class="right-content xun-geng-dian">
            <div class="title">
                <Row>
                    <Col span="20">
                        <h2>巡更点管理</h2>
                    </Col>
                    <Col span="4" class="add-btn-warp">
                        <Button type="primary" @click="showAdd = true">添加巡更点</Button>
                    </Col>
                </Row>
            </div>
            <div class="table-warp">
                <div class="search-warp">
                    <Row :gutter="8">
                        <Col span="6">
                            <span class="search-label">巡更点名称</span>
                            <Input type="text"></Input>
                        </Col>
                        <Col span="6">
                            <span class="search-label">贴它绑定状态</span>
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
        name: "xungengdian",
        data() {
          return {
              columns: [
                  {
                      title: '巡更点名称',
                      key: 'name'
                  },
                  {
                      title: '贴它绑定状态',
                      key: 'status'
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
                                          this.showAdd = true;
                                      }
                                  }
                              }, '删除')
                          ]);
                      }
                  },
              ],
              tableData: [
                  {
                      name: '灭火器月度检查表',
                      status: '小米',
                  },
              ],
          }
        },
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>