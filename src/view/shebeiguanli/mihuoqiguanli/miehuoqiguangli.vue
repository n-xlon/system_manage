<template>
	<div class="has-three-menu">
		<div class="three-nav-list">
			<router-link :class="$route.path === '/shebeiguanli/miehuoqiguangli/baofeimiehuoqi' ? 'router-link-exact-active router-link-active' : ''" v-for="(it, index) in configNav" :key="index" :to="it.path">{{it.text}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                configNav: [
                    {text: '灭火器管理', path: '/shebeiguanli/miehuoqiguangli/miehuoqi'},
                ],
            }
        }
    }
</script>
