<template>
	<div class="has-three-menu">
		<div class="three-nav-list">
			<router-link
					v-for="(it, index) in xunjianNav"
					:class="($route.path === '/richanggongzuo/xunjianguanli/yixunjian' || $route.path === '/richanggongzuo/xunjianguanli/renwujilu') && it.text === '巡检记录' ? 'router-link-exact-active router-link-active' : ''"
					:key="index"
					:to="it.path">{{it.text}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                xunjianNav: [
                    {text: '巡检分类', path: '/richanggongzuo/xunjianguanli/xunjianfenlei'},
                    {text: '巡检设备管理', path: '/richanggongzuo/xunjianguanli/xunjianshebei'},
                    {text: '巡检计划管理', path: '/richanggongzuo/xunjianguanli/xunjianjihua'},
                    {text: '巡检记录', path: '/richanggongzuo/xunjianguanli/xunjianjilu'},
                    {text: '巡检异常', path: '/richanggongzuo/xunjianguanli/xunjianyichang'},
                    {text: '巡检遗漏', path: '/richanggongzuo/xunjianguanli/xunjianyilou'},
                    {text: '巡检轨迹', path: '/richanggongzuo/xunjianguanli/xunjianguiji'},
                ],
            }
        }
	}
</script>
