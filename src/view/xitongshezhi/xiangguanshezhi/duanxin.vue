<template>
    <div class="right-content-warp">
        <div class="right-content duan-xin">
            <div class="title">
                <h2>短信相关配置</h2>
            </div>
            <div class="form-warp">
                <div class="ivu-form-label-top">
                    <span>短信发送人员配置</span>
                    <span>*请勾选短信发送人员</span>
                </div>
                <CheckboxGroup v-model="messPer">
                    <Row>
                        <Col span="6" v-for="(item, index) in personnelData" :key="index">
                            <Checkbox  :label="item.name + index">
                                <span class="name">{{item.name}}</span>
                                <span class="name">({{item.tel}})</span>
                            </Checkbox>
                        </Col>
                    </Row>
                </CheckboxGroup>
                <Row style="text-align: right;">
                    <Button type="primary" @click="saveForm">提交</Button>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "duanxin",
        data() {
            return {
                personnelData: [
                    {
                        name: '大拿',
                        tel: '13490908901',
                    },
                    {
                        name: '大拿',
                        tel: '13490908901',
                    },
                    {
                        name: '大拿',
                        tel: '13490908901',
                    },
                    {
                        name: '大拿',
                        tel: '13490908901',
                    },
                    {
                        name: '大拿',
                        tel: '13490908901',
                    },
                    {
                        name: '大拿',
                        tel: '13490908901',
                    }
                ],
                messPer: [],
            }
        },
        methods: {
            saveForm() {

            },
        }
    }
</script>

<style lang="scss" scoped type="text/css">
    @import '../../../../sass/xitongshezhi/duanxin.sass';
</style>