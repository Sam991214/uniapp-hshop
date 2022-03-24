<template>
	<view class="goods_detail">
		<!-- 轮播图 -->
		<!-- <swiper indicator-dots circular autoplay duration="1000" > -->
			<!-- 给item绑定轮播循环 -->
			<!-- <swiper-item v-for="item in swiperslwt" :key="item.id">
				<image :src="item.img" ></image>
			</swiper-item>	
		</swiper> -->
		<image :src="goods[id-1].img_url" ></image>
		<view class="box1">
			<view class="price">
				<text>￥{{goods[id-1].sell_price}}</text>
				<text>￥{{goods[id-1].market_price}}</text>
			</view>
			<view class="goods_name">
				{{goods[id-1].title}}
			</view>
			
		</view>
		<view class="line">	</view>
		
		<view class="box2">
			<view >货号：1211</view>
			<view >库存：12</view>
		</view>
		<view class="line">	</view>
		
		<view class="box3">
			<view class="tit">详细介绍</view>
			<view class="content">{{goods[id-1].zhaiyao}}</view>
			
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" 
			:buttonGroup="buttonGroup"  @click="onClick" 
			@buttonClick="buttonClick" />
		</view>
		
		
		
	</view>
</template>

<script>
	// 导入组件
	import uniGoodsNav from '@/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id:0,
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
				options: [{
							icon: 'headphones',
							text: '客服'
						}, {
							icon: 'shop',
							text: '店铺',
							info: 2,
							infoBackgroundColor:'#007aff',
							infoColor:"red"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 2
						}],
			}
		},
		methods: {
			 onClick (e) {
				    uni.showToast({
				      title: `点击${e.content.text}`,
				      icon: 'none'
				    })
				  },
				  buttonClick (e) {
				    console.log(e)
				    this.options[2].info++
				  }
			
		},
		onLoad(options){
			// console.log(options)
			this.id=options.id
			console.log(this.id)
		},
		components:{uniGoodsNav}
	}
</script>

<style lang="scss">
	
.goods_detail{
	swiper{
		width: 750rpx;
		height: 700rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
	image{
		width: 750rpx;
		height: 700rpx;
	}
	.box1{
		padding: 10rpx;
		.price{
			color: #ee2411;
			font-size: 40rpx;
			line-height: 80rpx;
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
		.goods_name{
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}

	.line{
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}

	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}

	.box3{
		padding-bottom: 50px;
		.tit{
			font-size: 30rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content{
			padding: 10px;
			font-size: 28rpx;
			color: #333333;
		}
	}
	.goods_nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}

</style>
