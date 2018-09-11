<template>
	<div class="has-three-menu">
        <div class="three-nav-list">
            <router-link v-for="(it, index) in bjnav" :key="index" :to="it.path">{{it.text}}</router-link>
        </div>
        <router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				bjnav: [
					{text: '报警点位表', path: '/wulianwang/huozaibaojinxitong/baojindian'},
					{text: '报警记录', path: '/wulianwang/huozaibaojinxitong/baojinjilu'},
				]
			}
		}
	}
</script>
