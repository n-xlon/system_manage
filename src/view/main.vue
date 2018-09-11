<template>
	<div class="app-container">
		<div class="header">
			<span class="logo">建筑安全智能管理系统</span>
			<div class="first-nav-list">
				<a :class="navIndex === index ? 'link-active' : ''" v-for="(it, index) in nav" :key="index" @mouseenter="$router.push(it.path), navIndex = index" href="javascript:void(0)">
					{{it.text}}
					<img src="../../images/activebg.png" alt="activebg">
				</a>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				navIndex: 0,
				nav: [
					{text: '数据中心', path: '/shujuzhongxin'},
					{text: '日常工作', path: '/richanggongzuo'},
					{text: '物联网', path: '/wulianwang'},
					{text: '消防管理', path: '/xiaofangguanli'},
					{text: '设备管理', path: '/shebeiguanli'},
					{text: '系统设置', path: '/xitongshezhi'}
				]
			}
		},
		beforeCreate () {
			this.$router.push('/shujuzhongxin')
		}
	}
</script>

