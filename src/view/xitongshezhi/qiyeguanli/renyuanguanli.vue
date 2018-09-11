<template>
    <div class="right-content-warp">
        <div class="right-content ren-yuan">
            <div class="title">
                <h2>人员管理</h2>
            </div>
            <div class="add-btn-warp">
                <span class="btn add-admin">
                    添加管理员
                </span>
                <span class="btn associated-use">
                    关联账号
                </span>
            </div>
            <div class="card-warp">
                <Row :gutter="10">
                    <Col span="6" v-for="(item, index) in personnel" :key="index">
                        <Card>
                            <p class="via"><img :src="item.via" :alt="index"></p>
                            <p class="name">{{item.name}}</p>
                            <p class="other">
                                <span>职位：</span>
                                <span>{{item.position}}</span>
                            </p>
                            <p class="other">
                                <span>No：</span>
                                <span>{{item.no}}</span>
                            </p>
                            <p class="other">
                                <span>Tel：</span>
                                <span>{{item.tel}}</span>
                            </p>
                            <p class="btn-warp">
                                <span class="btn status">审核中</span>
                                <span class="btn edit">无法操作</span>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    import via from '../../../../images/via.png'
    export default {
        name: "renyuanguanli",
        data() {
            return {
                personnel: [],
            }
        },
        created() {
            for (let i = 0; i < 18; i++) {
                this.personnel.push(
                    {
                        via: via,
                        name: '小于',
                        position: '经理',
                        no: 'IE908891',
                        tel: '19084108098',
                        status: '0',
                    }
                )
            }
        }
    }
</script>

<style lang="scss" scoped type="text/css">

</style>