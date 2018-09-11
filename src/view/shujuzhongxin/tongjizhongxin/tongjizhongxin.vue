<template>
	<div class="has-three-menu">
        <div class="three-nav-list">
            <router-link v-for="(it, index) in tznav" :key="index" :to="it.path">{{it.text}}</router-link>
        </div>
        <router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
                tznav: [
                    {text: '火灾报警统计', path: '/shujuzhongxin/tongjizhongxin/huozaibaojin'},
                    {text: '水系统统计', path: '/shujuzhongxin/tongjizhongxin/shuixitong'},
                    {text: '巡检统计', path: '/shujuzhongxin/tongjizhongxin/xunjian'},
                    {text: '巡更统计', path: '/shujuzhongxin/tongjizhongxin/xungeng'},
                    {text: '维修记录', path: '/shujuzhongxin/tongjizhongxin/weixiu'},
                    {text: '事件夹记录', path: '/shujuzhongxin/tongjizhongxin/shijianjia'},
                    {text: '分析报告', path: '/shujuzhongxin/tongjizhongxin/fenxi'},
                    {text: '隐患反馈', path: '/shujuzhongxin/tongjizhongxin/yinhuan'},
                ],
			}
		}
	}
</script>

