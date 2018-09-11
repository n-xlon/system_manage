<template>
	<div class="right-content-warp">
		<div class="right-content">
			<div class="title">
				报警点位表
			</div>
			<div class="right-details">
		  	<template>
		  		<div class="echarts-project">
						<div class="echarts-perl" id="alarm" style="width: 46%; height: 450px;"></div>
			  		<div class="echarts-perl" id="statistics" style="width: 46%; height: 450px;"></div>
		  		</div>
					<span class="label-item">选择主机:</span>
					<Select v-model="roomT" style="width:8rem">
						<Option v-for="(item, idx) in computerRoom" :value="item" :key="idx">{{ item }}</Option>
					</Select>
					<Button type="primary">搜索</Button>
				</template>
				<Table class="col" :columns="columns1" :data="data1"></Table>
			</div>
		</div>
   </div>
</template>

<script>
	export default {
		data () {
			return {
				computerRoom: ['消防监控室'],
				roomT: '',
				columns1: [
					{ title: '#', key: 'id', width: 50},
					{ title: '楼宇名称', key: 'lymc'},
					{ title: '设备名称', key: 'sbmc'},
					{ title: '设备位置', key: 'sbwz'},
					{ title: '回路信息', key: 'hlxx'},
					{ title: '最新设备状态', key: 'zxsbzt'},
					{ title: '上报状态时间', key: 'sbsj'},
					{ title: '7天火警', key: 'hj'},
					{ title: '7天故障', key: 'gz'},
					{ title: '未处理故障', key: 'wclgz'},
					{ 
						title: '故障处理',
						key: 'gzcl',
						align: 'center',
						width: 120,
						render: (h, params) => {
							return h('div', [
							  h('Button', {
							  	props: {
							  		type: 'primary',
							  		size: 'small'
							  	},
							  	style: {
							  		width: '80px'
							  	},
							  	on: {
							  	 	click: () => {
							  	 		this.tableItem(params)
							  	 	}
							  	}
							  }, '一键处理')
							])
						}
					}
				],
				data1: [
					{
						id: 1,
						lymc: 'A栋',
						sbmc: '控制器',
						sbwz: '',
						hlxx: '离线',
						zxsbzt: '火警',
						sbsj: '2018-08-26 14:28:42',
						hj: '1条',
						gz: '0条',
						wclgz: '0条'
					},
					{
						id: 1,
						lymc: 'A栋',
						sbmc: '控制器',
						sbwz: '',
						hlxx: '离线',
						zxsbzt: '火警',
						sbsj: '2018-08-26 14:28:42',
						hj: '1条',
						gz: '0条',
						wclgz: '0条'
					}
				]
			}
		},
		methods: {
			tableItem (item) {
				console.log(item)
			},
			echarts1 () {
				let chart = this.$echarts.init(document.getElementById('alarm'))
				let option = {
			    title : {
		        text: '7天内报警设备统计',
		        subtext: '',
		        x:'center',
		        textStyle: {
		        	color: '#fff'
		        }
			    },
			    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['报警1次','报警2~3次','报警4~6次','报警7次以上'],
		        textStyle: {
		        	color: '#fff'
		        }
			    },
			    series : [
		        {
	            name: '报警次数',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
                {value:335, name:'报警1次'},
                {value:310, name:'报警2~3次'},
                {value:234, name:'报警4~6次'},
                {value:135, name:'报警7次以上'}
	            ],
	            itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff'
                }
	            }
		        }
			    ]
				}
				chart.setOption(option)
			},
			echarts2 () {
				let chart = this.$echarts.init(document.getElementById('statistics'))
				let option = {
			    title : {
		        text: '7天内异常设备统计',
		        subtext: '',
		        x:'center',
		        textStyle: {
		        	color: '#fff'
		        }
			    },
			    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['报故障和火警设备','报故障设备','报火警设备'],
		        textStyle: {
		        	color: '#fff'
		        }
			    },
			    series : [
		        {
	            name: '报警次数',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
                {value:335, name:'报故障和火警设备'},
                {value:310, name:'报故障设备'},
                {value:234, name:'报火警设备'}
	            ],
	            itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
	            }
		        }
			    ]
				}
				chart.setOption(option)
			}
		},
		mounted () {
			this.echarts1()
			this.echarts2()
		}
	}
</script>

<style>
</style>