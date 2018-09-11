<template>
	<div class="right-content-warp">
		<div class="right-content">
			<div class="title">
				报警记录
			</div>
			<div class="right-details">
				<!--<Table stripe :columns="bjnote" :data="dateList"></Table>-->
				<table class="noteTable" width="100%">
					<col width="50"/>
					<tr class="table-item table-tab">
						<th class="table-list" v-for="(it, index) in bjnote" :key="index">{{it.title}}</th>
					</tr>
					<tr class="table-item">
						<th class="table-list" v-for="(it, index) in bjnote" :key="index" style="position: relative;">
							<template v-if="it.key !== 'id'">
								<Input v-model="value[it.key]" placeholder="" style="width: 90%" v-if="['lymc', 'zjwz', 'sbmc', 'addr'].indexOf(it.key) >= 0"/>
								<Select v-model="value[it.key]" style="width:90%" v-else-if="['bjlx', 'clqk'].indexOf(it.key) >= 0">
						      <Option v-for="item in searchList(it.key)" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
						    <DatePicker type="datetime" placeholder="Select date and time" style="width: 90%" v-else></DatePicker>
							</template>
						</th>
					</tr>
					<tr class="table-item" v-for="(it, index1) in dateList" :key="index1">
						<template v-for="(item, index2) in bjnote">
							<th class="table-list" v-if="item.key === 'clqk'"><Button type="info" style="width: 100px" v-if="it[item.key]">{{it[item.key]}}</Button></th>
							<th class="table-list item-cont" v-else>{{it[item.key] ? it[item.key] : ''}}</th>
						</template>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				bjnote: [
					{title: '#', key: 'id'},
					{title: '楼宇名称', key: 'lymc'},
					{title: '主机位置', key: 'zjwz'},
					{title: '设备名称', key: 'sbmc'},
					{title: '报警类型', key: 'bjlx'},
					{title: '位置', key: 'addr'},
					{title: '采集时间', key: 'cjsj'},
					{title: '处理情况', key: 'clqk'}
				],
				dateList: [
					{
						id: 1,
						lymc: 'A栋',
						zjwz: '消防监控室',
						sbmc: '离子探头',
						bjlx: '火警',
						addr: '位置',
						cjsj: '2018-08-14 12:32:00',
						clqk: '已处理'
					},
					{
						id: 1,
						lymc: 'A栋',
						zjwz: '消防监控室',
						sbmc: '离子探头',
						bjlx: '火警',
						addr: '位置',
						cjsj: '2018-08-14 12:32:00'
					}
				],
				value: {
					lymc: '',
					zjwz: '',
					sbmc: '',
					bjlx: '',
					addr: '',
					cjsj: ''
				}
			}
		},
		methods: {
			searchList (it) {
				return []
			}
		}
	}
</script>

<style>
</style>