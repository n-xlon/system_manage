import Vue from 'vue'
import Router from 'vue-router'
/*根页面*/
import First from '../src/view/first'

/*数据中心*/
import shujuzhongxin from '../src/view/shujuzhongxin/shujuzhongxin'
import shujuzhonglan from '../src/view/shujuzhongxin/shujuzhonglan'
import tongjizhongxin from '../src/view/shujuzhongxin/tongjizhongxin/tongjizhongxin'
import huozai from '../src/view/shujuzhongxin/tongjizhongxin/huozai'
import shuixitong from '../src/view/shujuzhongxin/tongjizhongxin/shuixitong'
import xunjian from '../src/view/shujuzhongxin/tongjizhongxin/xunjian'
import xungeng from '../src/view/shujuzhongxin/tongjizhongxin/xungeng'
import weixiu from '../src/view/shujuzhongxin/tongjizhongxin/weixiu'
import shijianjia from '../src/view/shujuzhongxin/tongjizhongxin/shijianjia'
import fenxi from '../src/view/shujuzhongxin/tongjizhongxin/fenxi'
import yinhuan from '../src/view/shujuzhongxin/tongjizhongxin/yinhuanfankui'
/*日常工作*/
import richanggongzuo from '../src/view/richanggongzuo/richanggongzuo'
import xunjianguanli from '../src/view/richanggongzuo/xuanjian/xunjianguanli'
import xunjianfenlei from '../src/view/richanggongzuo/xuanjian/xunjianfenlei'
import xunjianshebei from '../src/view/richanggongzuo/xuanjian/xunjianshebei'
import xunjianjihua from '../src/view/richanggongzuo/xuanjian/xunjianjihua'
import xunjianjilu from '../src/view/richanggongzuo/xuanjian/xunjianjilu'
import yixunjian from '../src/view/richanggongzuo/xuanjian/yixunjan'
import renwujilu from '../src/view/richanggongzuo/xuanjian/renwujilu'
import xunjianyichang from '../src/view/richanggongzuo/xuanjian/xunjianyichang'
import xunjianyilou from '../src/view/richanggongzuo/xuanjian/xunjianyilou'
import xunjianguiji from '../src/view/richanggongzuo/xuanjian/xunjianguiji'
import xungengguanli from '../src/view/richanggongzuo/xungeng/xungengguanli'
import xungengdian from '../src/view/richanggongzuo/xungeng/xungengdian'
import xungengjilu from '../src/view/richanggongzuo/xungeng/xungengjilu'
import xungengluxian from '../src/view/richanggongzuo/xungeng/xungengluxian'
/*物联网*/
import wulianwang from '../src/view/wulianwang/wulianwang'
import huozaibaojinxitong from '../src/view/wulianwang/huozaibaojin/huozaibaojinxitong'
import baojindian from '../src/view/wulianwang/huozaibaojin/baojindian'
import baojinjilu from '../src/view/wulianwang/huozaibaojin/baojinjilu'

import xiaofangshuixitong from '../src/view/wulianwang/xiaofangshuixitong'
import dianqijiankongxitong from '../src/view/wulianwang/dianqijiankongxitong'
import wuxianganyan from '../src/view/wulianwang/wuxianganyan'

/*消防管理*/
import xiaofangguanli from '../src/view/xiaofangguanli/xiaofangguanli'
import weibaojilu from '../src/view/xiaofangguanli/weibaojilu'
import weixiujilu from '../src/view/xiaofangguanli/weixiujilu'

/*设备管理*/
import shebeiguanli from '../src/view/shebeiguanli/shebeiguanli'
import miehuoqiguangli from '../src/view/shebeiguanli/mihuoqiguanli/miehuoqiguangli'
import miehuoqi from '../src/view/shebeiguanli/mihuoqiguanli/miehuoqi'
import baofeimiehuoqi from '../src/view/shebeiguanli/mihuoqiguanli/baofeimihuoai'

/*系统设置*/
import xitongshezhi from '../src/view/xitongshezhi/xitongshezhi'
import qiyeguanli from '../src/view/xitongshezhi/qiyeguanli/qiyeguanli'
import qiyexinxi from '../src/view/xitongshezhi/qiyeguanli/qiyexinxi'
import renyuanguanli from '../src/view/xitongshezhi/qiyeguanli/renyuanguanli'
import xiangmuguanli from '../src/view/xitongshezhi/qiyeguanli/xiangmuguanli'
import louyuguanli from '../src/view/xitongshezhi/qiyeguanli/louyuguanli'
import xiangguanshiyong from '../src/view/xitongshezhi/xiangguanshezhi/xiangguanshiyong'
import tietashezhi from '../src/view/xitongshezhi/xiangguanshezhi/tieta'
import duanxinxiangguanpeizhi from '../src/view/xitongshezhi/xiangguanshezhi/duanxin'
import pingmiantudianweiguanli from '../src/view/xitongshezhi/xiangguanshezhi/pingmiantu'
import dianweishezhi from '../src/view/xitongshezhi/xiangguanshezhi/dianwei'

Vue.use(Router)

export default new Router ({
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: First,
			children: [
				{
					path: '',
					component: shujuzhongxin
				},
				{
					path: 'shujuzhongxin',
					component: shujuzhongxin,
					redirect: 'shujuzhongxin/shujuzhonglan',
					children: [
						{
							path: 'shujuzhonglan',
							component: shujuzhonglan
						},
						{
							path: 'tongjizhongxin',
							component: tongjizhongxin,
							redirect: 'tongjizhongxin/huozaibaojin',
							children: [
								{
									path: 'huozaibaojin',
									component: huozai
								},
                                {
                                    path: 'shuixitong',
                                    component: shuixitong
                                },
                                {
                                    path: 'xunjian',
                                    component: xunjian
                                },
                                {
                                    path: 'xungeng',
                                    component: xungeng
                                },
                                {
                                    path: 'weixiu',
                                    component: weixiu
                                },
                                {
                                    path: 'shijianjia',
                                    component: shijianjia
                                },
                                {
                                    path: 'fenxi',
                                    component: fenxi
                                },
                                {
                                    path: 'yinhuan',
                                    component: yinhuan
                                },
							]
						}
					]
				},
				{
					path: 'richanggongzuo',
					component: richanggongzuo,
                    redirect: 'richanggongzuo/xunjianguanli',
					children: [
						{
							path: 'xunjianguanli',
							component: xunjianguanli,
                            redirect: 'xunjianguanli/xunjianfenlei',
                            children: [
                                {
                                  path: 'xunjianfenlei',
                                  component: xunjianfenlei,
                                },
                                {
                                    path: 'xunjianshebei',
                                    component: xunjianshebei,
                                },
                                {
                                    path: 'xunjianjihua',
                                    component: xunjianjihua,
                                },
                                {
                                    path: 'xunjianjilu',
                                    component: xunjianjilu,
                                },
								{
                                    path: 'yixunjian',
                                    component: yixunjian,
								},
                                {
                                    path: 'renwujilu',
                                    component: renwujilu,
                                },
                                {
                                    path: 'xunjianyichang',
                                    component: xunjianyichang,
                                },
                                {
                                    path: 'xunjianyilou',
                                    component: xunjianyilou,
                                },
                                {
                                    path: 'xunjianguiji',
                                    component: xunjianguiji,
                                },
                            ],
						},
						{
							path: 'xungengguanli',
							component: xungengguanli,
                            redirect: 'xungengguanli/xungengdian',
							children: [
                                {
                                    path: 'xungengdian',
                                    component: xungengdian,
                                },
                                {
                                    path: 'xungengluxian',
                                    component: xungengluxian,
                                },
                                {
                                    path: 'xungengjilu',
                                    component: xungengjilu,
                                },
                            ]
						}
					]
				},
				{
					path: 'wulianwang',
					component: wulianwang,
					redirect: '/wulianwang/huozaibaojinxitong',
					children: [
						{
							path: 'huozaibaojinxitong',
							component: huozaibaojinxitong,
							redirect: 'huozaibaojinxitong/baojindian',
							children: [
								{
									path: 'baojindian',
									component: baojindian
								},
								{
									path: 'baojinjilu',
									component: baojinjilu
								}
							]
						},
						{
							path: 'xiaofangshuixitong',
							component: xiaofangshuixitong
						},
						{
							path: 'dianqijiankongxitong',
							component: dianqijiankongxitong
						},
						{
							path: 'wuxianganyan',
							component: wuxianganyan
						}
					]
				},
				{
					path: 'xiaofangguanli',
					component: xiaofangguanli,
					redirect: '/xiaofangguanli/weibaojilu',
					children: [
						{
							path: 'weibaojilu',
							component: weibaojilu
						},
						{
							path: 'weixiujilu',
							component: weixiujilu
						}
					]
				},
				{
					path: 'shebeiguanli',
					component: shebeiguanli,
					redirect: '/shebeiguanli/miehuoqiguangli',
					children: [
					 	{
							path: 'miehuoqiguangli',
							component: miehuoqiguangli,
							redirect: 'miehuoqiguangli/miehuoqi',
							children: [
								{
                                    path: 'miehuoqi',
									component: miehuoqi,
								},
                                {
                                    path: 'baofeimiehuoqi',
                                    component: baofeimiehuoqi,
                                },
							]
						}
					]
				},
				{
					path: 'xitongshezhi',
					component: xitongshezhi,
					redirect: 'xitongshezhi/qiyeguanli',
					children: [
						{
							path: 'qiyeguanli',
							component: qiyeguanli,
							redirect: 'qiyeguanli/qiyexinxi',
							children: [
								{
                                    path: 'qiyexinxi',
                                    component: qiyexinxi,
								},
                                {
                                    path: 'renyuanguanli',
                                    component: renyuanguanli,
                                },
                                {
                                    path: 'xiangmuguanli',
                                    component: xiangmuguanli,
                                },
                                {
                                    path: 'louyuguanli',
                                    component: louyuguanli,
                                },
							],
						},
						{
							path: 'xiangguanshiyong',
							component: xiangguanshiyong,
                            redirect: 'xiangguanshiyong/tietashezhi',
                            children: [
                                {
                                    path: 'tietashezhi',
                                    component: tietashezhi,
                                },
                                {
                                    path: 'duanxinxiangguanpeizhi',
                                    component: duanxinxiangguanpeizhi,
                                },
                                {
                                    path: 'pingmiantudianweiguanli',
                                    component: pingmiantudianweiguanli,
                                },
                                {
                                    path: 'dianweishezhi',
                                    component: dianweishezhi,
                                },
                            ],
						}
					]
				}
			]
		}
	]
})