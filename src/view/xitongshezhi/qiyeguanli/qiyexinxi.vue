<template>
    <div class="right-content-warp">
        <div class="right-content qiyexinxi">
            <div class="title">
                <h2>企业信息</h2>
            </div>
            <div class="form-warp">
                <Form :model="formItem" label-position="top">
                    <FormItem label="公司名称">
                        <Input v-model="formItem.companyName"/>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input v-model="formItem.mail"/>
                    </FormItem>
                    <FormItem label="省市区">
                        <v-distpicker @selected="onSelected"></v-distpicker>
                    </FormItem>
                    <FormItem label="详细地址">
                        <Input v-model="formItem.address"/>
                    </FormItem>
                    <FormItem label="大屏监控中心企业显示名称">
                        <Input v-model="formItem.bigCompany"/>
                    </FormItem>
                    <FormItem label="地图设置（可选）">

                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="saveForm">修改</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'

    export default {
        name: "qiyexinxi",
        data() {
            return {
                pcd: '',
                formItem: {
                    companyName: '',
                    mail: '',
                    address: '',
                    bigCompany: '',
                },
            }
        },
        components: {
            VDistpicker,
        },
        methods: {
            onSelected(data) {
                console.log(data)
            },
            saveForm() {

            },
        },
    }
</script>

<style lang="scss" scoped type="text/css">

</style>