<template>
	<view class="news_detail">
		<text class="title">标题:{{detail[id-1].title}}</text>
		<view class="info">
			<text>发表时间：{{detail[id-1].add_time |formatDate}}</text>
			<text>浏览：{{detail[id-1].click}}</text>
		</view>
		<view class="content">
			 {{detail[id-1].zhaiyao}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:[
					{
						"id":1,
						"title":"美国阿肯色州一车展发生枪击案",
						"add_time":"2015-04-16T03:50:28.000Z",
						"zhaiyao":"据美国广播公司（ABC）报道，当地时间19日晚，美国阿肯色州一车展上发生枪击事件。报道称，目前已造成至少1人死亡，包括儿童在内20人受伤。《野兽日报》援引目击者话称，我看到子弹乱飞，人们在奔跑，有人鞋子跑丢了，还有人在我周围摔倒。",
						"click":1,
						
					},
					{
						"id":2,
						"title":"吉林省长春市91个地区调整为中风险地区",
						"add_time":"2015-04-16T03:50:28.000Z",
						"zhaiyao":"根据国务院联防联控机制关于科学划分、精准防控等工作要求，吉林省长春市自3月20日12时起，将长春市南关区明珠街道卫星商城等91个地区调整为中风险地区。（新华社）",
						"click":1,
						
					},
					{
						"id":3,
						"title":"约翰逊借乌局势宣传英国脱欧议题",
						"add_time":"2015-04-16T03:50:28.000Z",
						"zhaiyao":"英媒：#约翰逊宣传脱欧时说英国人和乌克兰人一样选择自由# ，引多方愤怒",
						"click":1,
					}
				]
				
			}
		},
		methods: {
			
		},
		onLoad(options){
			// console.log(this.id)
			console.log(options.id)
			this.id=options.id
		}
	}
</script>

<style lang="scss">
	.news_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			font-size: 40rpx;
			text-align: center;
			// 有宽center才有用
			width: 710rpx;
			// 因为text默认行内。所以要变成block
			display:block;
			margin: 20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
		.content{
			margin: 30rpx auto;
		}
	}

</style>
