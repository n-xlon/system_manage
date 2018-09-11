<template>
	<div class="has-three-menu">
		<div class="three-nav-list">
			<router-link v-for="(it, index) in xunjianNav" :key="index" :to="it.path">{{it.text}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                xunjianNav: [
                    {text: '巡更点管理', path: '/richanggongzuo/xungengguanli/xungengdian'},
                    {text: '巡更路线', path: '/richanggongzuo/xungengguanli/xungengluxian'},
                    {text: '巡更记录', path: '/richanggongzuo/xungengguanli/xungengjilu'},
                ],
            }
        }
	}
</script>
