<template>
	<div class="main-container">
		<div class="second-nav-list"><router-link v-for="(it, index) in nav2" :key="index" :to="it.path">{{it.text}}</router-link></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nav2: [
					{text: '灭火器管理', path: '/shebeiguanli/miehuoqiguangli'}
				]
			}
		}
	}
</script>
