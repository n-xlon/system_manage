<template>
	<div class="main-container">
		<div class="second-nav-list"><router-link v-for="(it, index) in nav5" :key="index" :to="it.path">{{it.text}}</router-link></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nav5: [
					{text: '维保记录', path: '/xiaofangguanli/weibaojilu'},
					{text: '维修记录', path: '/xiaofangguanli/weixiujilu'}
				]
			}
		}
	}
</script>
