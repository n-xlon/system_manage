<template>
	<div class="has-three-menu">
		<div class="three-nav-list">
			<router-link v-for="(it, index) in configNav" :key="index" :to="it.path">{{it.text}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                configNav: [
                    {text: '贴它设置', path: '/xitongshezhi/xiangguanshiyong/tietashezhi'},
                    {text: '短信相关配置', path: '/xitongshezhi/xiangguanshiyong/duanxinxiangguanpeizhi'},
                    {text: '平面图点位管理', path: '/xitongshezhi/xiangguanshiyong/pingmiantudianweiguanli'},
                    // {text: '点位设置', path: '/xitongshezhi/xiangguanshiyong/dianweishezhi'},
                ],
            }
        }
    }
</script>
