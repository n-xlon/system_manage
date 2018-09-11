<template>
	<div class="has-three-menu">
		<div class="right-content-warp">
	    	<div class="right-content">
				<div class="title">
					维保记录
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
							<th class="table-list" v-for="(it, index) in wbnote" :key="index">{{it.title}}</th>
						</tr>
						<tr class="table-item">
							<th class="table-list" v-for="(it, index) in wbnote" :key="index" style="position: relative;">
								<template v-if="it.key !== 'id'">
									<Input v-model="value[it.key]" placeholder="" style="width: 90%" v-if="['xmmc', 'rwpl', 'rwType'].indexOf(it.key) >= 0"/>
								</template>
							</th>
						</tr>
						<tr class="table-item" v-for="(it, index1) in wbdateList" :key="index1">
							<template v-for="(item, index2) in wbnote">
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
				wbnote: [
					{title: '#', key: 'id'},
					{title: '项目名称', key: 'xmmc'},
					{title: '任务频率', key: 'rwpl'},
					{title: '任务开始时间', key: 'beginTime'},
					{title: '任务结束时间', key: 'endTime'},
					{title: '任务状态', key: 'rwType'},
				],
				wbdateList: [
					{
						id: 1,
						xmmc: 'A栋',
						rwpl: '消防监控室',
						beginTime: '2018-08-14 12:32:00',
						endTime: '2018-08-14 12:32:00',
						rwType: '未维保'
					},
					{
						id: 2,
						xmmc: 'A栋',
						rwpl: '消防监控室',
						beginTime: '2018-08-14 12:32:00',
						endTime: '2018-08-14 12:32:00',
						rwType: '未维保'
					}
				],
				value: {
					xmmc: '',
					rwpl: '',
					rwType: ''
				}
			}
		}
	}
</script>
