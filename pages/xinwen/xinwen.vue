<template>
	<view class="news">
		<!-- <view class="news_item" v-for="item in newsList" :kwy=item.id>
			<image :src="item.img_url"></image>
			
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view >
				<view class="info">
					<text>发表时间：{{item.add_time}}:</text>
					<text>浏览次数：{{item.click}}</text>
				</view>
			</view>
		</view> -->
		<news-item :list="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		
		data() {
			return {
				newsList:[
					 {"id":1,
					       "title":"#美国阿肯色州一车展发生枪击案# ",
					       "add_time":"2015-04-16T03:50:28.000Z",
					       "zhaiyao":" 据美国广播公司（ABC）报道，当地时间19日晚，美国阿肯色州一车展上发生枪击事件。报道称，目前已造成至少1人死亡，包括儿童在内20人受伤。《野兽日报》援引目击者话称，我看到子弹乱飞，人们在奔跑，有人鞋子跑丢了，还有人在我周围摔倒。",
					       "click":1,
					       "img_url":"https://wx1.sinaimg.cn/mw2000/001Q8zQmly1h0g9nzir66j60f608g3z202.jpg"
					      },
					{"id":2,
					      "title":"#吉林省长春市91个地区调整为中风险地区#",
					      "add_time":"2015-04-16T03:50:28.000Z",
					      "zhaiyao":"根据国务院联防联控机制关于科学划分、精准防控等工作要求，吉林省长春市自3月20日12时起，将长春市南关区明珠街道卫星商城等91个地区调整为中风险地区。（新华社） ",
					      "click":1,
					      "img_url":"https://wx4.sinaimg.cn/mw2000/001Q8zQmly1h0g9mooettj60p00p0dh902.jpg"
					     },
					{"id":3,
					      "title":"#约翰逊借乌局势宣传英国脱欧议题#",
					      "add_time":"2015-04-16T03:50:28.000Z",
					      "zhaiyao":"英媒：#约翰逊宣传脱欧时说英国人和乌克兰人一样选择自由# ，引多方愤怒",
					      "click":1,
					      "img_url":"https://wx2.sinaimg.cn/mw2000/001Q8zQmly1h0g7l4uwq4j60fl0aumxw02.jpg"
					     },
				]
			}
		},
		
		methods: {
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					// 把第一页面id传给第二页面
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
			
		},
		components:{"news-item":newsItem}
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
