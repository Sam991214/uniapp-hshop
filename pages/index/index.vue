<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay duration="1000" >
			<!-- 给item绑定轮播循环 -->
			<swiper-item v-for="item in swiperslwt" :key="item.id">
				<image :src="item.img" ></image>
			</swiper-item>	
		</swiper>
		
		<!-- 导航区 -->
		<view class="nav">
			<view class=" nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)" >
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
			
			
		</view>
		
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<!-- <view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<image :src="item.img_url" ></image>
					
					<view class="price">
						<text>￥{{item.sell_price}}</text>
						<text>￥{{item.market_price}}</text>
					</view>
		
					<view class="name">{{item.title}}</view>
				</view>
				
				
			</view> -->
			<!-- 组件封装 -->
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
			
			
	</view>
</template>

<script>
	// 组件封装
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		
		data() {
			return {
				// api提供数据
				swipers:[],
				// 自定义
				swiperslwt:[
					 {
					    "id":1,
					    // "url":"http://www.itcast.cn/subject/phoneweb/index.html",
					    "img":"https://img0.baidu.com/it/u=988839353,4124166831&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
					    },        
					    {
					    "id":2,
					    // "url":"http://www.itcast.cn/subject/phoneweb/index.html",
					    "img":"http://t15.baidu.com/it/u=2171607558,2807310831&fm=224&app=112&f=JPEG?w=500&h=500"
					    },
					    {
					    "id":3,
					    // "url":"http://www.itcast.cn/subject/phoneweb/index.html",
					    "img":"https://img1.baidu.com/it/u=64914742,2714084415&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
					     }
				],
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
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:'阿通超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'视频',
						path:'/pages/shipin/shipin'
					},
				]
			    
			}
		},
		onLoad() {
			// this.getSwipers()
			// this.getHotGoods()
		},
		components:{"goods-list":goodsList},
		
		
		methods: {
			// async getSwipers(){
				
				
			// 	// 未全局挂载
			// 	// console.log('获取轮播图数据')
			// 	// uni.request({
			// 	// url: 'http://localhost:8082/api/getlunbo', 			   
			// 	//     success: (res) => {
				        
			// 	// 		console.log(res.data);
				        
			// 	// 		if(res.data.status!==0){
			// 	// 			// 交互窗口
			// 	// 			return uni.showToast({
			// 	// 				title: '请求数据失败'
			// 	// 				});
			// 	// 		}
			// 	// 		this.swipers=res.data.message;
			// 	// 		return uni.showToast({
			// 	// 			title: '请求数据成功'
			// 	// 			});
						
			// 	//     }
			// 	// })
				
				
			// 	const res=await this.$myRequest({
			// 		url:'/api/getlunbo'
			// 	})
			// 	console.log(res)
			// 	this.swipers=res.data.message
			// },
			
			// 获取热门商品列表data
			// async getHotGoods(){
			// 	const res=await this.$myRequest({
			// 		url:'/api/getgoods?pageindex=1'
			// 	})
			// 	console(res)
			// },
			// 跳转
			navItemClick(url){
				uni.navigateTo({
					url
					// success: res => {},
					// fail: () => {},
					// complete: () => {}
				});
			},
			
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		
		
		
		
		
		
		}
	
	
	
	
	}
</script>

<style lang="scss">
.home{
		swiper{
			// 整个屏，以苹果6，375px二倍图设计，375px=750rpx，若高度190px，rpx就要380rpx
			// item会自动100%
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		
		
		.nav{
			// 挤在一行
			display: flex;
			// 设置宽度
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background-color: #080808;
					// 设置圆形
					border-radius: 60rpx;
					// 上下10，左右自动，居中
					margin: 10px auto;
					// 字体图标行高图标大小和颜色
					line-height: 120rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}
				.icon-tupian{
					// 微调图片图标
					font-size: 46rpx;
				}
				text{
					font-size: 30rpx;
				}
				
			}
		}
		
			
		.hot_goods{
			background-color: #eee;
			overflow: hidden;
			.tit{
				height: 50px;
				line-height: 50px;
				// color: $shop-color;
				color: #ff5500;
				text-align: center;
				// 字距
				letter-spacing: 20px;
				font-size: 30px;
				background-color: #ffffff;
				// 上下10左右0边距可以把文字框外的背景色显现出,为防止父元素也一起调用起来要overflow
				margin: 10rpx 0;
			}
			
			.goods_list{
				padding: 0 15rpx;
				display: flex;
				// 换行
				flex-wrap: wrap;
				// 两边贴边对齐
				justify-content: space-between;
				.goods_item{
					background-color: #FFFFFF;
					// 335
					width:340rpx ;
					margin: 10rpx 0;
					// 整体往内挤
					padding: 15rpx;
					// 盒子不被撑大
					box-sizing: border-box;
					
					image{
						width: 80%;
						height: 300rpx;
						// 居中图片
						display: block;
						margin: auto;
					}
					.price{
						color: #ee2411;
						font-size: 36rpx;
						margin: 15rpx 0;
						// 第二个text
						text:nth-child(2){
							color: #ccc;
							font-size: 28rpx;
							margin-left: 17rpx;
							// 中线
							text-decoration: line-through;
						}
					}
					.name{
						font-size: 32rpx;
						line-height: 50rpx;
						padding-bottom: 15rpx;
						padding-top: 10rpx;
					}
				}
			}
		 }

		

}
	
	
	
</style>
