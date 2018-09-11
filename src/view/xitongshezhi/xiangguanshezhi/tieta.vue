<template>
    <div class="right-content-warp">
        <div class="right-content tie-ta">
            <div class="title">
                <h2>贴它设置</h2>
            </div>
            <div class="form-warp">
                <Form :model="formItem" label-position>
                    <FormItem label="启用贴它二维码用于巡检工作">
                        <Select v-model="formItem.isUsed">
                            <Option value="1">是</Option>
                            <Option value="0">否</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="贴它扫码页面轮播图跳转配置">
                        <Input v-model="formItem.url"/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="saveForm">保存</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tieta",
        data() {
            return {
                formItem: {
                    isUsed: '',
                    url: '',
                } ,
            }
        },
        methods: {
            saveForm() {

            }  ,
        },
    }
</script>

<style lang="scss" scoped type="text/css">

</style>