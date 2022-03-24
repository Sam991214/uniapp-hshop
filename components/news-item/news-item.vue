<template>
	<view >
		<!-- 遍历newslist转为list -->
		<view class="news_item" v-for="item in list" :key=item.id @click="navigator(item.id)">
			<image :src="item.img_url"></image>
			
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view >
				<view class="info">
					<text>发表时间：{{item.add_time|formatDate}}</text>
					<text>浏览次数：{{item.click}}</text>
				</view>
			</view>
			</view>
		
	</view>
</template>

<script>
	export default {
		props:['list'],
		filters:{
			formatDate(date){
			const ndate = new Date(date)
			const year=ndate.getFullYear()
			const month=ndate.getMonth()
			const day=ndate.getDay()
			return year +'-'+month+'-'+day
			}
		},
		
		methods:{
			navigator(id){
				// 调用父组件方法,触发父组件事件
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid #080808;
			image{
				// width: 200rpx;
				// 防止宽被压缩
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				// 竖排flex
				flex-direction: column;
				// 对齐方式
				justify-content: space-between;
				.tit{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 50rpx;
					}
					
				}
			}
		}
	}
</style>
