<template>
	<div class="has-three-menu">
        <div class="three-nav-list">
            <a class="nav-link" :class="activeIndex === index ? 'active' : ''" v-for="(it, index) in xfsnav" :key="index" @click.prevent="activeIndex = index">{{it.text}}</a>
        </div>
        <div class="right-content-warp water-warp">
        	<img class="bgImg" src="../../../images/waterSystem/bg-cont.png" alt="" />
	        <div class="right-content">
		        <div class="title" style="padding-left: 10px;">
		        	<img class="title-img" src="../../../images/xunjian.png" alt="" />消防水系统
		        </div>
		        <div class="water-pressure">
		        	<span class="pressure-title">水位实时数据</span>
		   			<ul class="water-item">
		   				<li class="water-item-data" v-for="it in 5">
		   					<img class="item-img" src="../../../images/waterSystem/water-pres.png" />
		   					<span class="item-content">
		   						<p class="num">98.73</p>
		   						<p class="num">cm</p>
		   						<p>水位</p>
		   					</span>
		   					<img class="img-bd" src="../../../images/waterSystem/waterLine.png" />
		   					<span class="bottom-cont">14F|A栋屋顶水箱</span>
		   				</li>
		   			</ul>
		        </div>

		        <div class="water-pressure">
		        	<span class="pressure-title">水压实时数据</span>
		   			<ul class="water-item">
		   				<li class="water-item-data" v-for="it in 5">
		   					<img class="item-img" src="../../../images/waterSystem/water-pres.png" />
		   					<span class="item-content">
		   						<p class="num">98.73</p>
		   						<p class="num">cm</p>
		   						<p>水位</p>
		   					</span>
		   					<img class="img-bd" src="../../../images/waterSystem/waterLine.png" />
		   					<span class="bottom-cont">B1|喷淋汞出水压力</span>
		   				</li>
		   			</ul>
		        </div>

		        <div class="water-pressure">
		        	<span class="pressure-title">水压实时数据</span>
		   			<ul class="water-item">
		   				<li class="water-item-pressure" v-for="it in 5">
		   					<div class="title-list"><img class="item-img-pres" src="../../../images/waterSystem/airPots.png" /><span>消防水汞</span></div>
		   					<img class="img-bd-pres" src="../../../images/waterSystem/waterLine.png" />
		   					<div class="data-type">
		   						<div class="type-item">
		   							<img src="../../../images/waterSystem/waterImg.png"/>
		   							<span class="type-cont"><p>正常</p><p style="font-size: 14px;color: #fff;">电源状态</p></span>
		   						</div>
		   						<div class="type-item1">
		   							<img src="../../../images/waterSystem/waterImg3.png"/>
		   							<span class="type-cont"><p>正常</p><p style="font-size: 14px;color: #fff;">电源状态</p></span>
		   						</div>
		   						<div class="type-item1">
		   							<img src="../../../images/waterSystem/waterImg2.png"/>
		   							<span class="type-cont"><p>正常</p><p style="font-size: 14px;color: #fff;">电源状态</p></span>
		   						</div>
		   						<div class="type-item">
		   							<img src="../../../images/waterSystem/waterImg1.png"/>
		   							<span class="type-cont"><p>正常</p><p style="font-size: 14px;color: #fff;">电源状态</p></span>
		   						</div>
		   					</div>
		   					<span class="bottom-cont">B1|喷淋汞出水压力</span>
		   				</li>
		   			</ul>
		        </div>
		        <img class="content-bottom-img" src="../../../images/waterSystem/bottomBorder.png" />
		    </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				activeIndex: 0,
				xfsnav: [
					{text: 'A栋', id: 1},
					{text: 'B栋', id: 2}
				]
			}
		}
	}
</script>

