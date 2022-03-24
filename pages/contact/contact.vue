 <template>
	<view class="contact">
		<image class="img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.bjjfsd.com%2FUploads%2Fueditor%2Fimage%2F20170418%2F58f5d4a7e9d78.gif&refer=http%3A%2F%2Fwww.bjjfsd.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650321690&t=7afd086a395497a3e519b339cdea4e34" ></image>
		<view class="info">
			<view class="phone" @click="phone">
				联系电话：180-1877-0039（点击拨打）
			</view>
			<view class="address">
				地址：王者峡谷
			</view>
			<map   style="width: 100%; height: 300px;":latitude="latitude" :longitude="longitude" 
			:markers="covers" :scale="scale"></map>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
				longitude:120.297948,
				latitude:31.465666,
				scale:15,
				covers: [{
								latitude: 31.467755,
								longitude: 120.297434,
								iconPath: '../../static/logo.png',
								width:30,
								height:30
			}],
			
		}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'18018770039'
				})
			}
		},
		
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 375px;
		height: 400rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		.phone{
			line-height: 70rpx;
			border-bottom: 1px solid #eee;
		}
		.address{
			line-height: 70rpx;
			border-bottom: 1px solid #eee;
		}
	}
	
}
</style>
