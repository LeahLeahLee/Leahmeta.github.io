(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{R9QT:function(t,e,n){"use strict";n.r(e);var i=n("4d7F"),o=n.n(i),r=n("lhuP"),a={name:"create",inheritAttrs:!0,components:{editor:function(){return n.e(60).then(n.bind(null,"y3Oo"))}},data:function(){return{isShowCreatebox:!1,fields:[],record:{},canInitDialog:!1}},props:{field_list:{type:Object,required:!0},getCreateFields:{type:Function,required:!0},doCreateRequest:{type:Function,required:!0},triggerConfig:{type:Object,default:function(){return{}}},dialogConfig:{type:Object,default:function(){return{}}},createBtnConfig:{type:Object,default:function(){return{}}},cancelBtnConfig:{type:Object,default:function(){return{}}},transformData:{type:Function,default:function(t){return t}},autoValidate:{type:Boolean,default:!1}},watch:{field_list:function(){this.fields=[]}},methods:{showDialog:function(){this.isShowCreatebox=!0},resetRecord:function(){var t=this;this.record=this.fields.reduce(function(e,n){return n.forEach(function(n){var i=t.field_list[n].editorComponent.default;e[n]="function"==typeof i?i.call(t,n):i}),e},{})},handleClick:function(){var t=this;0===this.fields.length?new o.a(function(e,n){t.getCreateFields(e)}).then(function(e){t.fields=e,t.resetRecord(),t.canInitDialog=!0,t.showDialog()}).catch(r.c):(this.resetRecord(),this.showDialog())},doCreate:function(){var t=this;this.$refs.createbox.validate().then(function(e){new o.a(function(n,i){t.doCreateRequest(n,t.transformData(e))}).then(function(){t.isShowCreatebox=!1,t.$emit("update")}).catch(r.c)}).catch(function(e){t.$message(e)})}}},c=n("KHd+"),l=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",t._b({on:{click:t.handleClick}},"el-button",t.triggerConfig,!1),[t._v("\n        "+t._s(t.triggerConfig.text)+"\n    ")]),t._v(" "),t.canInitDialog?n("el-dialog",t._b({attrs:{visible:t.isShowCreatebox},on:{"update:visible":function(e){t.isShowCreatebox=e}}},"el-dialog",t.dialogConfig,!1),[n("editor",{ref:"createbox",attrs:{fields:t.fields,field_list:t.field_list,record:t.record,autoValidate:t.autoValidate,mode:"create"}}),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",t._b({on:{click:function(e){t.isShowCreatebox=!1}}},"el-button",t.cancelBtnConfig,!1),[t._v("\n                "+t._s(t.cancelBtnConfig.text)+"\n            ")]),t._v(" "),n("el-button",t._b({on:{click:t.doCreate}},"el-button",t.createBtnConfig,!1),[t._v("\n                "+t._s(t.createBtnConfig.text)+"\n            ")])],1)],1):t._e()],1)},[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=17.cc764a574449536934fb.js.map