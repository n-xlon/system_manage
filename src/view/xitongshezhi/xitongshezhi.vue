<template>
	<div class="main-container">
		<div class="second-nav-list"><router-link v-for="(it, index) in nav6" :key="index" :to="it.path">{{it.text}}</router-link></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nav6: [
					{text: '企业管理', path: '/xitongshezhi/qiyeguanli'},
					{text: '相关使用设置', path: '/xitongshezhi/xiangguanshiyong'}
				]
			}
		}
	}
</script>
