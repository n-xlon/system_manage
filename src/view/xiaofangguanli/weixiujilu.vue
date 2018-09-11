<template>
	<div class="has-three-menu">
		<div class="right-content-warp">
	    	<div class="right-content">
				<div class="title">
					维修记录
				</div>
				<div class="right-details">
					<div class="wb-note">
						<img src="../../../images/wbbusiness.png" alt="" />
						<div class="wb-business-addr">
							<p><span class="wb-title">维保服务公司</span><span>维保服务公司</span></p>
							<p><span class="wb-title">维保负责人</span><span>王明</span></p>
							<p><span class="wb-title">联系电话</span><span>1223342432354</span></p>
						</div>
					</div>
					<table class="noteTable col" width="100%">
						<col width="50"/>
						<tr class="table-item table-tab">
							<th class="table-list" v-for="(it, index) in wxnote" :key="index">{{it.title}}</th>
						</tr>
						<tr class="table-item">
							<th class="table-list" v-for="(it, index) in wxnote" :key="index" style="position: relative;">
								<template v-if="it.key !== 'id'">
									<Input v-model="value[it.key]" placeholder="" style="width: 90%" v-if="['xmmc', 'lymc', 'lcmc', 'sbmc', 'describe'].indexOf(it.key) >= 0"/>
									<Select v-model="value[it.key]" style="width:90%" v-else-if="it.key === 'wxzt'">
								      <Option v-for="(item, idx) in typeList" :value="value[it.key]" :key="idx">{{ item }}</Option>
								    </Select>
						    <DatePicker type="datetime" placeholder="Select date and time" style="width: 90%" v-else></DatePicker>
								</template>
							</th>
						</tr>
						<tr class="table-item item-cont" v-for="(it, index1) in wxdateList" :key="index1">
							<template v-for="(item, index2) in wxnote">
								<th class="table-list item-cont">{{it[item.key] ? it[item.key] : ''}}</th>
							</template>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				wxnote: [
					{title: '#', key: 'id'},
					{title: '项目名称', key: 'xmmc'},
					{title: '楼宇名称', key: 'lymc'},
					{title: '楼层名称', key: 'lcmc'},
					{title: '设备名称', key: 'sbmc'},
					{title: '维修状态', key: 'wxzt'},
					{title: '描述', key: 'describe'},
					{title: '保修时间', key: 'fixTime'},
				],
				wxdateList: [
					{
						id: 1,
						xmmc: 'A栋',
						lymc: '消防监控室',
						lcmc: '楼层',
						sbmc: '设备',
						wxzt: '未维保',
						describe: '修理',
						fixTime: '2018-08-14 12:32:00'
					},
					{
						id: 2,
						xmmc: 'A栋',
						lymc: '消防监控室',
						lcmc: '楼层',
						sbmc: '设备',
						wxzt: '未维保',
						describe: '修理',
						fixTime: '2018-08-14 12:32:00'
					}
				],
				typeList: [],
				value: {
					xmmc: '',
					lymc: '',
					lcmc: '',
					sbmc: '',
					wxzt: '',
					describe: '',
					fixTime: ''
				}
			}
		},
		watch: {
			'value.xmmc': (newVal) => {
				console.log(newVal)
			}
		}
	}
</script>
