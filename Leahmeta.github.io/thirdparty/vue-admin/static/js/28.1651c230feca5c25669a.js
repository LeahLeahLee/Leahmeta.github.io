(window.webpackJsonp=window.webpackJsonp||[]).push([[28,29],{"0axp":function(t,e,i){"use strict";e.a={props:{value:{type:[Object,String],required:!0},isMonoValid:{type:[Boolean,Function],default:function(){return!0}},monoStruct:{type:Function,default:function(){return{}}}},computed:{model:{get:function(){return this.isMonoValid(this.value)?[this.value]:[]},set:function(t){t.length?this.$emit("input",t[t.length-1]):this.$emit("input",this.monoStruct())}}}}},Yw9u:function(t,e,i){"use strict";i.r(e);var n=i("hsso"),l=i("0axp"),a={name:"field_image_mono",inheritAttrs:!0,components:{field_image_multi:n.default},mixins:[l.a]},u=(i("bOfI"),i("KHd+")),o=Object(u.a)(a,function(){var t=this,e=t.$createElement;return(t._self._c||e)("field_image_multi",t._b({staticClass:"field_image_mono",model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"field_image_multi",t.$attrs,!1))},[],!1,null,"57c6220a",null);e.default=o.exports},bOfI:function(t,e,i){"use strict";var n=i("wSFs");i.n(n).a},hsso:function(t,e,i){"use strict";i.r(e);var n=i("6EPR"),l=i("VVEY"),a=i("dj38"),u={name:"field_image_multi",inheritAttrs:!0,components:{field_file_multi:n.default},mixins:[l.a,a.a]},o=i("KHd+"),s=Object(o.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("field_file_multi",t._b({attrs:{"list-type":"picture-card",accept:"image/gif,image/jpeg,image/jpg,image/png"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"field_file_multi",t.$attrs,!1),[i("template",{slot:"default"},[t._t("default")],2),t._v(" "),i("template",{slot:"tip"},[t._t("tip")],2)],2)},[],!1,null,null,null);e.default=s.exports},wSFs:function(t,e,i){}}]);
//# sourceMappingURL=28.1651c230feca5c25669a.js.map