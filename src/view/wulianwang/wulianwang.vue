<template>
	<div class="main-container">
		<div class="second-nav-list"><router-link v-for="(it, index) in nav4" :key="index" :to="it.path">{{it.text}}</router-link></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nav4: [
					{text: '火灾报警系统', path: '/wulianwang/huozaibaojinxitong'},
					{text: '消防水系统', path: '/wulianwang/xiaofangshuixitong'},
					{text: '电气火灾监控系统', path: '/wulianwang/dianqijiankongxitong'},
					{text: '无线感烟探测器', path: '/wulianwang/wuxianganyan'}
				]
			}
		}
	}
</script>

