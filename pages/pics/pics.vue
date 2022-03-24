<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="active===index?'active':''"
			v-for="(item,index) in cates" :key="item.id" @click="leftClickHandle(index,item.id)">{{item.title}}</view>
			
		</scroll-view>
		<!-- <scroll-view class="right" scroll-y="true" >
			<view class="item" >
				<image :src="spa.img_url" ></image>
				<text>{{spa.zhaiyao}}</text>
			</view>
		</scroll-view> -->
		<scroll-view class="right" scroll-y="true" >
			<view class="item" >
				<image @click="previewImg()" :src="news[active].img_url" ></image>
				<text>{{news[active].zhaiyao}}</text>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:1,
				cates:[
					
					    {"title":"家居生活","id":1},
					    {"title":"摄影设计","id":2},
					    {"title":"明星美女","id":3},
					    {"title":"空间设计","id":4},
					    {"title":"户型装饰","id":5},
					    {"title":"广告摄影","id":6},
					    {"title":"摄影学习","id":7},
					    {"title":"摄影器材","id":8},
					    {"title":"明星写真","id":9},
					    {"title":"清纯甜美","id":10},
					    {"title":"古典美女","id":11}
				],
				news:[
					{
						        "id":1,
						        "title":"",
						        "img_url":"https://wx1.sinaimg.cn/mw2000/002yNgYPly1gsyp1b13yyj60j60ku3z602.jpg",
						        "zhaiyao":"可爱小猫咪"
					},
					{
						        "id":2,
						        "title":"",
						        "img_url":"https://wx2.sinaimg.cn/orj360/005UJ76vly1gttz16dlfsj60m80tm11h02.jpg",
						        "zhaiyao":"一图一句诗 ​​​"
					},
					{
						        "id":3,
						        "title":"",
						        "img_url":"https://wx4.sinaimg.cn/mw2000/006lM95Qly1gtkzwebhe9j30ov0ov419.jpg",
						        "zhaiyao":"有趣的灵魂不会变老 ​​​"
					},
					{
						        "id":4,
						        "title":"",
						        "img_url":"https://wx3.sinaimg.cn/mw2000/006fXzpQgy1gtt3yvdke6j60u00i00wq02.jpg",
						        "zhaiyao":"逃离城市生活 ​​​"
					},
					{
						        "id":5,
						        "title":"",
						        "img_url":"https://wx2.sinaimg.cn/mw2000/ad6a65e1ly1h0cxug2qazj20u00u0di6.jpg",
						        "zhaiyao":"白底美食头像合集"
					},
					{
						        "id":6,
						        "title":"",
						        "img_url":"https://wx1.sinaimg.cn/mw2000/006fXzpQgy1h0d7sdo5elj32es37jqv6.jpg",
						        "zhaiyao":"离开大学校园的那一天，我的青春结束了。"
					},
					{
						        "id":7,
						        "title":"",
						        "img_url":"https://wx4.sinaimg.cn/mw2000/0062TtP1gy1h0bmw1voj1j315o1jktn5.jpg",
						        "zhaiyao":"春日来信 ​​​"
					},
					{
						        "id":8,
						        "title":"",
						        "img_url":"https://wx1.sinaimg.cn/mw2000/635a0089gy1h0d3kkqg2jj21e022yhdu.jpg",
						        "zhaiyao":"梦回疫情前的春天"
					},
					{
						        "id":9,
						        "title":"",
						        "img_url":"https://wx4.sinaimg.cn/mw2000/69d5c3ealy1h023shmvosj219c1w0npd.jpg",
						        "zhaiyao":"玉兰皎皎"
					},
					{
						        "id":10,
						        "title":"",
						        "img_url":"https://wx3.sinaimg.cn/mw2000/006tkBCzgy1gef5k9misbj329u41i1kz.jpg",
						        "zhaiyao":"茫茫人海都不过是假装轻松的努力活着而已。 ​​​"
					},
					{
						        "id":11,
						        "title":"",
						        "img_url":"https://wx3.sinaimg.cn/mw2000/007GYgpfly1h0at9i324nj30ep0f3myj.jpg",
						        "zhaiyao":"又到了存表情包的快乐时间"
					},
				
				],
				spa:[],
				
				
			}
		},
		methods: {
			// async getPicsCate(){
			// 	const res=await this.$myRequest({
			// 		url:' /api/getimgcategory'
			// 	})
			// 	console.log(res)
			// },
			leftClickHandle(index,id){
				this.active=index
				// const a = this.news.find((item,i) => {
				//        console.log(id)
				//         return item.id === this.active
				//     })
				// 	this.spa=a
				// 	console.log(this.spa)
					
				// 	// console.log(a)
				// 	console.log(spa)
				
			},
			previewImg(){
				
				const urls=this.news.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					urls
					
				})
				
			},
		},
		onLoad() {
			// this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	// page在最外面
	page{
		height: 100%;
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			// 设置高度防止全局滚动
			height: 100%;
			border-right: 1px solid #eee;
		}
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background-color: #080808;
			color: #FFFFFF;
		}
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10px auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}

</style>
