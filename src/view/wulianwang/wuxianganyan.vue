<template>
	<div class="has-three-menu">
		<div class="right-content-warp">
	    	<div class="right-content">
				<div class="title">
					无线感烟探测器
				</div>
				<div class="right-details">
					<ul>
						<li class="tcq-data-list">
							<div class="list-item">
								<span><p class="abnormal-nums">5</p>&nbsp;个</span><br>
								<span class="item-type">静音状态</span>
							</div>
							<img class="img-icon" src="../../../images/mute.png" alt="">
						</li>
						<li class="tcq-data-list">
							<div class="list-item">
								<span><p class="abnormal-nums">0</p>&nbsp;个</span><br>
								<span class="item-type">报警状态</span>
							</div>
							<img class="img-icon" src="../../../images/alarm.png" alt="">
						</li>
						<li class="tcq-data-list">
							<div class="list-item">
								<span><p class="abnormal-nums">2</p>&nbsp;个</span><br>
								<span class="item-type">低压状态</span>
							</div>
							<img class="img-icon" src="../../../images/short-pressure.png" alt="">
						</li>
						<li class="tcq-data-list">
							<div class="list-item">
								<span><p class="abnormal-nums">0</p>&nbsp;个</span><br>
								<span class="item-type">其它</span>
							</div>
							<img class="img-icon" src="../../../images/another.png" alt="">
						</li>
						<li class="tcq-data-list">
							<div class="list-item">
								<span><p class="abnormal-nums">3</p>&nbsp;个</span><br>
								<span class="item-type">故障状态</span>
							</div>
							<img class="img-icon" src="../../../images/fault.png" alt="">
						</li>
					</ul>
					
					<div class="col scan-search-area">
						<span>楼宇:</span>
						<Select v-model="lyValue" style="width:4rem">
				      <Option v-for="item in lyList" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				    <span>状态:</span>
						<Select v-model="lyValue" style="width:4rem">
				      <Option v-for="item in lyList" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				    <Button type="info">搜索</Button>
				    <Button type="success">查看历史记录</Button>
					</div>
					<Table class="col wifi-scaners-data" :columns="tableItem" :data="tableData"></Table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				lyValue: '',
				lyList: ['A', 'B'],
				tableItem: [
					{title: '编号', key: 'bh'},
					{title: '楼宇', key: 'ly'},
					{title: '位置', key: 'wz'},
					{title: '状态', key: 'zt'},
					{title: '时间', key: 'sj'}
				],
				tableData: [
					{
						bh: 1,
						ly: 'E栋',
						wz: 'E幢-908',
						zt: '低压',
						sj: '2018-07-15 00:01:45'
					}
				]
			}
		}
	}
</script>
