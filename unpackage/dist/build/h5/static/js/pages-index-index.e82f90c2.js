(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0bde":function(t,i,e){"use strict";var a=e("0e69"),o=e.n(a);o.a},"0e69":function(t,i,e){var a=e("b195");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("23c4b6db",a,!0,{sourceMap:!1,shadowMode:!1})},"1a53":function(t,i,e){"use strict";var a=e("e8c2"),o=e.n(a);o.a},2086:function(t,i,e){"use strict";e.r(i);var a=e("4403"),o=e("6052");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("1a53");var c,s=e("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"3a5024a0",null,!1,a["a"],c);i["default"]=r.exports},4078:function(t,i,e){"use strict";e.r(i);var a=e("963f"),o=e("df83");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("0bde");var c,s=e("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"190c5806",null,!1,a["a"],c);i["default"]=r.exports},4403:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"hot_goods"},[e("v-uni-view",{staticClass:"goods_list"},t._l(t.goods,(function(i){return e("v-uni-view",{key:i.id,staticClass:"goods_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigator(i.id)}}},[e("v-uni-image",{attrs:{src:i.img_url}}),e("v-uni-view",{staticClass:"price"},[e("v-uni-text",[t._v("￥"+t._s(i.sell_price))]),e("v-uni-text",[t._v("￥"+t._s(i.market_price))])],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.title))])],1)})),1)],1)},n=[]},6052:function(t,i,e){"use strict";e.r(i);var a=e("f9e3"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},"963f":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={goodsList:e("2086").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"home"},[e("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,duration:"1000"}},t._l(t.swiperslwt,(function(t){return e("v-uni-swiper-item",{key:t.id},[e("v-uni-image",{attrs:{src:t.img}})],1)})),1),e("v-uni-view",{staticClass:"nav"},t._l(t.navs,(function(i,a){return e("v-uni-view",{key:a,staticClass:" nav_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navItemClick(i.path)}}},[e("v-uni-view",{class:i.icon}),e("v-uni-text",[t._v(t._s(i.title))])],1)})),1),e("v-uni-view",{staticClass:"hot_goods"},[e("v-uni-view",{staticClass:"tit"},[t._v("推荐商品")]),e("goods-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(i){arguments[0]=i=t.$handleEvent(i),t.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},n=[]},b195:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-190c5806]{width:%?750?%;height:%?380?%}.home uni-swiper uni-image[data-v-190c5806]{height:100%;width:100%}.home .nav[data-v-190c5806]{display:flex}.home .nav .nav_item[data-v-190c5806]{width:25%;text-align:center}.home .nav .nav_item uni-view[data-v-190c5806]{width:%?120?%;height:%?120?%;background-color:#080808;border-radius:%?60?%;margin:10px auto;line-height:%?120?%;color:#fff;font-size:%?50?%}.home .nav .nav_item .icon-tupian[data-v-190c5806]{font-size:%?46?%}.home .nav .nav_item uni-text[data-v-190c5806]{font-size:%?30?%}.home .hot_goods[data-v-190c5806]{background-color:#eee;overflow:hidden}.home .hot_goods .tit[data-v-190c5806]{height:50px;line-height:50px;color:#f50;text-align:center;letter-spacing:20px;font-size:30px;background-color:#fff;margin:%?10?% 0}.home .hot_goods .goods_list[data-v-190c5806]{padding:0 %?15?%;display:flex;flex-wrap:wrap;justify-content:space-between}.home .hot_goods .goods_list .goods_item[data-v-190c5806]{background-color:#fff;width:%?340?%;margin:%?10?% 0;padding:%?15?%;box-sizing:border-box}.home .hot_goods .goods_list .goods_item uni-image[data-v-190c5806]{width:80%;height:%?300?%;display:block;margin:auto}.home .hot_goods .goods_list .goods_item .price[data-v-190c5806]{color:#ee2411;font-size:%?36?%;margin:%?15?% 0}.home .hot_goods .goods_list .goods_item .price uni-text[data-v-190c5806]:nth-child(2){color:#ccc;font-size:%?28?%;margin-left:%?17?%;text-decoration:line-through}.home .hot_goods .goods_list .goods_item .name[data-v-190c5806]{font-size:%?32?%;line-height:%?50?%;padding-bottom:%?15?%;padding-top:%?10?%}',""]),t.exports=i},c6b5:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("2086")),n={data:function(){return{swipers:[],swiperslwt:[{id:1,img:"https://img0.baidu.com/it/u=988839353,4124166831&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"},{id:2,img:"http://t15.baidu.com/it/u=2171607558,2807310831&fm=224&app=112&f=JPEG?w=500&h=500"},{id:3,img:"https://img1.baidu.com/it/u=64914742,2714084415&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"}],goods:[{id:1,title:"Apple iPad Air 10.9英寸 平板电脑",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"（ 2020年款 64G WLAN版/A14芯片/触控ID/全面屏MYFP2CH/A）玫瑰金色",click:0,img_url:"https://img30.360buyimg.com/babel/s320x320_jfs/t1/181466/19/4835/163950/60a3ac13Ebbaa3668/86ed64faab5f3308.jpg!cc_320x320.webp",sell_price:3e3,market_price:4499,stock_quantity:60},{id:2,title:"三星 SAMSUNG Galaxy S22+ ",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"超视觉夜拍系统超清夜景 超电影影像系统 超耐用精工设计8GB+256GB 雾松绿 5G手机",click:0,img_url:"https://img10.360buyimg.com/babel/s320x320_jfs/t1/208753/31/19315/117757/622844afE9a3ba649/1764615ccd214cda.jpg!cc_320x320.webpp",sell_price:2e3,market_price:3499,stock_quantity:60},{id:3,title:"Apple Watch Series 7 ",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"智能手表GPS款41 毫米午夜色铝金属表壳午夜色运动型表带MKMX3CH/A",click:0,img_url:"https://img14.360buyimg.com/babel/s320x320_jfs/t1/65182/17/17268/53192/61414c91E13f37580/02fe59444c7455b7.jpg!cc_320x320.webp",sell_price:1e3,market_price:2499,stock_quantity:60},{id:4,title:"OPPO Enco X",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"北欧丹拿联合打造 真无线入耳式降噪蓝牙耳机 encox双重主动降噪 通用小米苹果华为一加手机白歌",click:0,img_url:"https://img11.360buyimg.com/babel/s320x320_jfs/t1/213630/16/14968/366823/62344c71Ed41b3807/d7d7712e52393a95.jpg!cc_320x320.webp",sell_price:700,market_price:1499,stock_quantity:60},{id:5,title:"PITAKA MagEZ Slider",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"可适用苹果iPhone手机耳机二合一无线充电器MagSafe磁吸充电宝 二合一充电器",click:0,img_url:"https://img12.360buyimg.com/babel/s320x320_jfs/t1/131724/38/23985/130237/622840c8E243fcbc6/519ec99db432c0e6.jpg!cc_320x320.webp",sell_price:800,market_price:999,stock_quantity:60},{id:6,title:"小米 Civi ",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"3200万双柔光自拍120Hz曲面原色屏 4500mAh大电量 立体双扬声器 丝绒AG工艺 5G手机 8G+128GB 粉色",click:0,img_url:"https://img10.360buyimg.com/babel/s320x320_jfs/t1/131476/39/23152/276222/6227081dE8c192c64/2136702090a64ef2.jpg!cc_320x320.webp",sell_price:2500,market_price:3499,stock_quantity:60},{id:7,title:"Apple iPhone 12",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"(A2404) 64GB 紫色 支持移动联通电信5G 双卡双待手机",click:0,img_url:"https://img14.360buyimg.com/babel/s320x320_jfs/t1/180664/8/139/131472/607f3651Ea726c502/0a52258ea9352a93.jpg!cc_320x320.webp",sell_price:1500,market_price:8999,stock_quantity:60},{id:8,title:"vivo X70t",add_time:"2015-04-19T16:51:03.000Z",zhaiyao:"蔡司光学镜头 大底微云台主摄 三星5nm旗舰芯片 3200万前置摄像 5G手机 12GB+256GB 星云",click:0,img_url:"https://img20.360buyimg.com/babel/s320x320_jfs/t1/137567/18/20744/78726/621de035E1a464522/c8abd71dd38c777f.jpg!cc_320x320.webp",sell_price:3900,market_price:4499,stock_quantity:60}],navs:[{icon:"iconfont icon-ziyuan",title:"阿通超市",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"视频",path:"/pages/shipin/shipin"}]}},onLoad:function(){},components:{"goods-list":o.default},methods:{navItemClick:function(t){uni.navigateTo({url:t})},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};i.default=n},cb6c:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods_list[data-v-3a5024a0]{padding:0 %?15?%;display:flex;flex-wrap:wrap;justify-content:space-between}.goods_list .goods_item[data-v-3a5024a0]{background-color:#fff;width:%?340?%;margin:%?10?% 0;padding:%?15?%;box-sizing:border-box}.goods_list .goods_item uni-image[data-v-3a5024a0]{width:80%;height:%?300?%;display:block;margin:auto}.goods_list .goods_item .price[data-v-3a5024a0]{color:#ee2411;font-size:%?36?%;margin:%?15?% 0}.goods_list .goods_item .price uni-text[data-v-3a5024a0]:nth-child(2){color:#ccc;font-size:%?28?%;margin-left:%?17?%;text-decoration:line-through}.goods_list .goods_item .name[data-v-3a5024a0]{font-size:%?32?%;line-height:%?50?%;padding-bottom:%?15?%;padding-top:%?10?%}',""]),t.exports=i},df83:function(t,i,e){"use strict";e.r(i);var a=e("c6b5"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},e8c2:function(t,i,e){var a=e("cb6c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("2ea7fba0",a,!0,{sourceMap:!1,shadowMode:!1})},f9e3:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:["goods"],methods:{navigator:function(t){this.$emit("goodsItemClick",t)}}};i.default=a}}]);