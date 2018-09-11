<template>
	<div class="main-container">
		<div class="second-nav-list">
			<router-link v-for="(it, index) in nav3" :key="index" :to="it.path">{{it.text}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nav3: [
					{text: '数据总览', path: '/shujuzhongxin/shujuzhonglan'},
					{text: '统计中心', path: '/shujuzhongxin/tongjizhongxin'}
				]
			}
		}
	}
</script>