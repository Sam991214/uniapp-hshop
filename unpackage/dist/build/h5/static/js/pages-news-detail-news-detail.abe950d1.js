(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-detail-news-detail"],{"0e43":function(t,n,i){"use strict";i.r(n);var a=i("c4f8"),e=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(n,t,(function(){return a[t]}))}(r);n["default"]=e.a},"3b77":function(t,n,i){"use strict";var a=i("d0c7"),e=i.n(a);e.a},"4a2c":function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news_detail[data-v-8a3d2492]{font-size:%?30?%;padding:0 %?20?%}.news_detail .title[data-v-8a3d2492]{font-size:%?40?%;text-align:center;width:%?710?%;display:block;margin:%?20?% 0}.news_detail .info[data-v-8a3d2492]{display:flex;justify-content:space-between}.news_detail .content[data-v-8a3d2492]{margin:%?30?% auto}',""]),t.exports=n},5655:function(t,n,i){"use strict";i.r(n);var a=i("a827"),e=i("0e43");for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);i("3b77");var d,s=i("f0c5"),c=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"8a3d2492",null,!1,a["a"],d);n["default"]=c.exports},a827:function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"news_detail"},[i("v-uni-text",{staticClass:"title"},[t._v("标题:"+t._s(t.detail[t.id-1].title))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-text",[t._v("发表时间："+t._s(t._f("formatDate")(t.detail[t.id-1].add_time)))]),i("v-uni-text",[t._v("浏览："+t._s(t.detail[t.id-1].click))])],1),i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.detail[t.id-1].zhaiyao))])],1)},r=[]},c4f8:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{id:0,detail:[{id:1,title:"美国阿肯色州一车展发生枪击案",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"据美国广播公司（ABC）报道，当地时间19日晚，美国阿肯色州一车展上发生枪击事件。报道称，目前已造成至少1人死亡，包括儿童在内20人受伤。《野兽日报》援引目击者话称，我看到子弹乱飞，人们在奔跑，有人鞋子跑丢了，还有人在我周围摔倒。",click:1},{id:2,title:"吉林省长春市91个地区调整为中风险地区",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"根据国务院联防联控机制关于科学划分、精准防控等工作要求，吉林省长春市自3月20日12时起，将长春市南关区明珠街道卫星商城等91个地区调整为中风险地区。（新华社）",click:1},{id:3,title:"约翰逊借乌局势宣传英国脱欧议题",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"英媒：#约翰逊宣传脱欧时说英国人和乌克兰人一样选择自由# ，引多方愤怒",click:1}]}},methods:{},onLoad:function(t){console.log(t.id),this.id=t.id}};n.default=a},d0c7:function(t,n,i){var a=i("4a2c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("24ff03f6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);