(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chongzhixinxi-add-or-update"],{"11b7":function(e,r,t){"use strict";var i=t("8645"),n=t.n(i);n.a},8645:function(e,r,t){var i=t("fc2e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("121328fa",i,!0,{sourceMap:!1,shadowMode:!1})},"8e9c":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var n=i(t("3b8d")),o=i(t("e2b1")),a={data:function(){return{ruleForm:{yonghuming:"",xingming:"",jine:"",riqi:"",ispay:"",userid:""},user:{}}},components:{wPicker:o.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid),!r.id){e.next=15;break}return this.ruleForm.id=r.id,e.next=13,this.$api.info("chongzhixinxi",this.ruleForm.id);case 13:i=e.sent,this.ruleForm=i.data;case 15:if(!r.cross){e.next=37;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=37;break}if(o=e.t1.value,"yonghuming"!=o){e.next=23;break}return this.ruleForm.yonghuming=n[o],e.abrupt("continue",18);case 23:if("xingming"!=o){e.next=26;break}return this.ruleForm.xingming=n[o],e.abrupt("continue",18);case 26:if("jine"!=o){e.next=29;break}return this.ruleForm.jine=n[o],e.abrupt("continue",18);case 29:if("riqi"!=o){e.next=32;break}return this.ruleForm.riqi=n[o],e.abrupt("continue",18);case 32:if("userid"!=o){e.next=35;break}return this.ruleForm.userid=n[o],e.abrupt("continue",18);case 35:e.next=18;break;case 37:this.styleChange();case 38:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},riqiChange:function(e){this.ruleForm.riqi=e.target.value,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.jine){e.next=3;break}return this.$utils.msg("金额不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.jine||this.$validate.isIntNumer(this.ruleForm.jine)){e.next=6;break}return this.$utils.msg("金额应输入整数"),e.abrupt("return");case 6:if(this.ruleForm.userid){e.next=9;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("chongzhixinxi",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("chongzhixinxi",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=a},a3f2:function(e,r,t){"use strict";t.r(r);var i=t("8e9c"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(r,e,(function(){return i[e]}))}(o);r["default"]=n.a},df76:function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("用户名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"用户名"},model:{value:e.ruleForm.yonghuming,callback:function(r){e.$set(e.ruleForm,"yonghuming",r)},expression:"ruleForm.yonghuming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("金额")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"金额"},model:{value:e.ruleForm.jine,callback:function(r){e.$set(e.ruleForm,"jine",r)},expression:"ruleForm.jine"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("日期")]),t("v-uni-picker",{attrs:{mode:"date",value:e.ruleForm.riqi},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.riqiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.riqi?e.ruleForm.riqi:"请选择日期"))])],1)],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},o=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return i}))},e777:function(e,r,t){"use strict";t.r(r);var i=t("df76"),n=t("a3f2");for(var o in n)"default"!==o&&function(e){t.d(r,e,(function(){return n[e]}))}(o);t("11b7");var a,u=t("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"2f4ef49e",null,!1,i["a"],a);r["default"]=s.exports},fc2e:function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-2f4ef49e]{padding:%?20?%}.content[data-v-2f4ef49e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-2f4ef49e]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-2f4ef49e]{width:%?180?%}.avator[data-v-2f4ef49e]{width:%?150?%;height:%?60?%}.right-input[data-v-2f4ef49e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-2f4ef49e]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-2f4ef49e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-2f4ef49e]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-2f4ef49e]{border:0}.cu-form-group uni-input[data-v-2f4ef49e]{padding:0 %?30?%}.uni-input[data-v-2f4ef49e]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-2f4ef49e]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-2f4ef49e]::after{line-height:%?88?%}.select .uni-input[data-v-2f4ef49e]{line-height:%?88?%}.input .right-input[data-v-2f4ef49e]{line-height:%?88?%}',""]),e.exports=r}}]);