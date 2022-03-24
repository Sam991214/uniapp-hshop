// const BASE_URL='http://localhost:8082'

// // 封装方法
// // 暴露请求防止域名更换修改
// // options为请求传进来的对象
// export const myRequest=(options)=>{
// 	// 返回promise需要异步接收
// 	return new Promise((resolve,reject)=>{
// 		uni.request({
// 			// 拿到options的接口地址
// 			url:BASE_URL+options.url,
// 			// method默认为get
// 			method:options.method||'GET',
// 			data:options.data||{},
// 			success: (res) => {
// 				// 用箭头函数是因为默认指向window全局
// 				if(res.data.status!==0){
// 					// 交互窗口
// 					return uni.showToast({
// 						title: '请求数据失败'
// 						});
// 					}
// 					// 成功时返回res
// 				resolve(res)
// 			},
// 			// 返回错误信息
// 			fail: (err) => {
// 				uni.showToast({
// 					title: '请求接口失败'
// 					})
// 					// 返回错误信息
// 					reject(err)
// 			}
// 		})
		
// 	})
	
// }