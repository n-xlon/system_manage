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
                {text: '企业信息', path: '/xitongshezhi/qiyeguanli/qiyexinxi'},
                {text: '人员管理', path: '/xitongshezhi/qiyeguanli/renyuanguanli'},
                {text: '项目管理', path: '/xitongshezhi/qiyeguanli/xiangmuguanli'},
                {text: '楼宇管理', path: '/xitongshezhi/qiyeguanli/louyuguanli'},
            ],
		}
	}
}
</script>
