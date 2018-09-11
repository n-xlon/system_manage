<template>
	<div class="has-three-menu">
    <div class="three-nav-list">
        <a class="nav-floors" :class="activeIndex === index ? 'active' : ''" v-for="(it, index) in floors" :key="index" @click.prevent="activeIndex = index">{{it}}</a>
    </div>
    <div class="right-content-warp">
	    <div class="right-content">
				<div class="title">
					电器火灾监控系统数据
				</div>
				<div class="right-details">
					<ul>
						<li class="dq-system-data">
							<img src="../../../images/start.png" alt="" />
							<div class="cont">
								<span><p class="num">56.0</p> A</span><br>
								<span class="p-cont">B相电流</span>
							</div>
						</li>
						<li class="dq-system-data">
							<img src="../../../images/start.png" alt="" />
							<div class="cont">
								<span><p class="num">56.0</p> A</span><br>
								<span class="p-cont">B相电流</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				floors: ['A', 'B'],
				activeIndex: 0
			}
		}
	}
</script>
