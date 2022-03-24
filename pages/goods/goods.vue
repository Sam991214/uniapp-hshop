<template>
	<view>
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
	</view>
	<!-- <view class="isOver" v-if="flag">
		---------------我是有底线的----------------
	</view> -->
</template>

<script>
	// 组件封装
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				// flag:false,
				goods:[
					{
						"id":1,"title":"Apple iPad Air 10.9英寸 平板电脑",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"（ 2020年款 64G WLAN版/A14芯片/触控ID/全面屏MYFP2CH/A）玫瑰金色",
						      "click":0,
						      "img_url":"https://img30.360buyimg.com/babel/s320x320_jfs/t1/181466/19/4835/163950/60a3ac13Ebbaa3668/86ed64faab5f3308.jpg!cc_320x320.webp",
						      "sell_price":3000,
						      "market_price":4499,
						      "stock_quantity":60
					},
					{
						"id":2,"title":"三星 SAMSUNG Galaxy S22+ ",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"超视觉夜拍系统超清夜景 超电影影像系统 超耐用精工设计8GB+256GB 雾松绿 5G手机",
						      "click":0,
						      "img_url":"https://img10.360buyimg.com/babel/s320x320_jfs/t1/208753/31/19315/117757/622844afE9a3ba649/1764615ccd214cda.jpg!cc_320x320.webpp",
						      "sell_price":2000,
						      "market_price":3499,
						      "stock_quantity":60
					},
					{
						"id":3,"title":"Apple Watch Series 7 ",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"智能手表GPS款41 毫米午夜色铝金属表壳午夜色运动型表带MKMX3CH/A",
						      "click":0,
						      "img_url":"https://img14.360buyimg.com/babel/s320x320_jfs/t1/65182/17/17268/53192/61414c91E13f37580/02fe59444c7455b7.jpg!cc_320x320.webp",
						      "sell_price":1000,
						      "market_price":2499,
						      "stock_quantity":60
					},
					{
						"id":4,"title":"OPPO Enco X",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"北欧丹拿联合打造 真无线入耳式降噪蓝牙耳机 encox双重主动降噪 通用小米苹果华为一加手机白歌",
						      "click":0,
						      "img_url":"https://img11.360buyimg.com/babel/s320x320_jfs/t1/213630/16/14968/366823/62344c71Ed41b3807/d7d7712e52393a95.jpg!cc_320x320.webp",
						      "sell_price":700,
						      "market_price":1499,
						      "stock_quantity":60
					},
					{
						"id":5,"title":"PITAKA MagEZ Slider",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"可适用苹果iPhone手机耳机二合一无线充电器MagSafe磁吸充电宝 二合一充电器",
						      "click":0,
						      "img_url":"https://img12.360buyimg.com/babel/s320x320_jfs/t1/131724/38/23985/130237/622840c8E243fcbc6/519ec99db432c0e6.jpg!cc_320x320.webp",
						      "sell_price":800,
						      "market_price":999,
						      "stock_quantity":60
					},
					{
						"id":6,"title":"小米 Civi ",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"3200万双柔光自拍120Hz曲面原色屏 4500mAh大电量 立体双扬声器 丝绒AG工艺 5G手机 8G+128GB 粉色",
						      "click":0,
						      "img_url":"https://img10.360buyimg.com/babel/s320x320_jfs/t1/131476/39/23152/276222/6227081dE8c192c64/2136702090a64ef2.jpg!cc_320x320.webp",
						      "sell_price":2500,
						      "market_price":3499,
						      "stock_quantity":60
					},
					
				],
				nextgoods:[
					
					{
						"id":7,"title":"Apple iPhone 12",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"(A2404) 64GB 紫色 支持移动联通电信5G 双卡双待手机",
						      "click":0,
						      "img_url":"https://img14.360buyimg.com/babel/s320x320_jfs/t1/180664/8/139/131472/607f3651Ea726c502/0a52258ea9352a93.jpg!cc_320x320.webp",
						      "sell_price":1500,
						      "market_price":8999,
						      "stock_quantity":60
					},
					{
						"id":8,"title":"vivo X70t",
						      "add_time":"2015-04-19T16:51:03.000Z",
						      "zhaiyao":"蔡司光学镜头 大底微云台主摄 三星5nm旗舰芯片 3200万前置摄像 5G手机 12GB+256GB 星云",
						      "click":0,
						      "img_url":"https://img20.360buyimg.com/babel/s320x320_jfs/t1/137567/18/20744/78726/621de035E1a464522/c8abd71dd38c777f.jpg!cc_320x320.webp",
						      "sell_price":3900,
						      "market_price":4499,
						      "stock_quantity":60
					},
				],
				
			}
		},
		// 组件注册
		components:{"goods-list":goodsList},
		methods: {
			stopPullDownRefresh(){
				uni.stopPullDownRefresh()
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
			
		},
		// 触底
		onReachBottom(){
			// if(this.goods.length<1)return this.flag=true
			console.log(this.goods.length)
			if(this.goods.length==8){
				return uni.showToast({
						title: '暂无更多数据'
							});
			}
			this.goods=[...this.goods,...this.nextgoods]
			console.log(this.goods.length)
		},
		// 监听下拉刷新
		onPullDownRefresh(){
			setTimeout(()=>{
				this.stopPullDownRefresh()
			},1000)
			
		}
		
	}
</script >

<style lang="scss">
.goods_list{
	background-color: #eee;
}

</style>
