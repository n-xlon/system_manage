<template>
	<div class="main-container">
		<div class="second-nav-list"><router-link v-for="(it, index) in nav1" :key="index" :to="it.path">{{it.text}}</router-link></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nav1: [
					{text: '巡检管理', path: '/richanggongzuo/xunjianguanli'},
					{text: '巡更管理', path: '/richanggongzuo/xungengguanli'}
				]
			}
		}
	}
</script>
