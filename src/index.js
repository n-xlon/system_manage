import Vue from 'vue'
import iview from 'iview'
import router from '../router/index.js'
import Main from './view/main.vue'
import 'bulma/bulma.sass'
import 'iview/dist/styles/iview.css'
import '../sass/_index.sass'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'
import Distpicker from 'v-distpicker'

Vue.prototype.$echarts = echarts 

Vue.component('v-distpicker', Distpicker)

Vue.use(iview)

let vm = new Vue({
	el: '#app',
	router,
	render: h => h(Main),
	components: {
		Main
	}
})

export{
	Vue
}
