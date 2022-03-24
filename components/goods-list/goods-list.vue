<template>
	<view class="hot_goods">
		
		<view class="goods_list">
			<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
				<image :src="item.img_url" ></image>
				
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
	
				<view class="name">{{item.title}}</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default{
		// 传需要的值进来渲染
		props:['goods'],
		methods:{
			navigator(id){
				// 给父组件事件
				this.$emit('goodsItemClick',id)
			}
					
		}
	}
</script>

<style lang="scss">
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
	
</style>
