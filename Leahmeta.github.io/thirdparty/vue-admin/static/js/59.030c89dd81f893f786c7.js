(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"+PdH":function(n,e,t){},"0tVQ":function(n,e,t){t("FlQf"),t("VJsP"),n.exports=t("WEpk").Array.from},"2gjT":function(n,e,t){"use strict";t.d(e,"a",function(){return a});var i=t("4d7F"),r=t.n(i),o=t("GQeE"),l=t.n(o);function a(n,e){Array.isArray(e)||(e=l()(e).map(function(n){return{name:n,component:e[n]}})),e.forEach(function(e){n.$options.components[e.name]=e.component});var t=e.filter(function(n){var e=n.component;return"function"==typeof e&&!e.cid}).map(function(e){var t=e.component,i=e.name;return t().then(function(e){n.$options.components[i]=e})});return r.a.all(t)}},"5VPc":function(n,e,t){"use strict";t.d(e,"a",function(){return o});var i=t("EJiy"),r=t.n(i);function o(n,e){n.forEach(function(n){n.relateField&&"object"!==r()(n.relateField)&&function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.relateField;Object.defineProperty(n,"value",{get:function(){return e[t]},set:function(){},enumerable:!0,configurable:!0})}(n,e)})}},IP1Z:function(n,e,t){"use strict";var i=t("2faE"),r=t("rr1i");n.exports=function(n,e,t){e in n?i.f(n,e,r(0,t)):n[e]=t}},Q8dH:function(n,e,t){"use strict";var i=t("P2sY"),r=t.n(i),o=t("m1cH"),l=t.n(o),a=t("EJiy"),u=t.n(a);e.a={methods:{mergeAttrsConfig:function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return e=e.filter(function(n){return n&&"object"===(void 0===n?"undefined":u()(n))}),r.a.apply(Object,[{},this.$attrs].concat(l()(e)))}}}},VJsP:function(n,e,t){"use strict";var i=t("2GTP"),r=t("Y7ZC"),o=t("JB68"),l=t("sNwI"),a=t("NwJ3"),u=t("tEej"),d=t("IP1Z"),f=t("fNZA");r(r.S+r.F*!t("TuGD")(function(n){Array.from(n)}),"Array",{from:function(n){var e,t,r,c,s=o(n),h="function"==typeof this?this:Array,m=arguments.length,_=m>1?arguments[1]:void 0,p=void 0!==_,b=0,v=f(s);if(p&&(_=i(_,m>2?arguments[2]:void 0,2)),void 0==v||h==Array&&a(v))for(t=new h(e=u(s.length));e>b;b++)d(t,b,p?_(s[b],b):s[b]);else for(c=v.call(s),t=new h;!(r=c.next()).done;b++)d(t,b,p?l(c,_,[r.value,b],!0):r.value);return t.length=b,t}})},YEIV:function(n,e,t){"use strict";e.__esModule=!0;var i,r=t("SEkw"),o=(i=r)&&i.__esModule?i:{default:i};e.default=function(n,e,t){return e in n?(0,o.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},m1cH:function(n,e,t){"use strict";e.__esModule=!0;var i,r=t("rfXi"),o=(i=r)&&i.__esModule?i:{default:i};e.default=function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return(0,o.default)(n)}},nWCS:function(n,e,t){"use strict";e.a={functional:!0,props:{label:{type:String},labelComponent:{type:Object}},render:function(n,e){var t=e.props,i=e.slots;return t.labelComponent&&t.labelComponent?i().default:n("span",[t.label])}}},rfXi:function(n,e,t){n.exports={default:t("0tVQ"),__esModule:!0}},wXpH:function(n,e,t){"use strict";var i=t("+PdH");t.n(i).a},wdqA:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var i=t("AyUB"),r=t.n(i);function o(n,e,t){var i=e.reduce(function(e,i){var r=n[i].labelComponent,o=void 0;if(r)if(r[t])o=r[t];else{var l=r.default;if(l){var a=l.exclude;Array.isArray(a)&&a.includes(t)||(o=l)}}return o&&e.push({field:i,name:o.name,component:o.component,config:o.config}),e},[]);return{list:i,map:i.reduce(function(n,e){return n[e.field]=e,n},r()(null))}}},y3Oo:function(n,e,t){"use strict";t.r(e);var i=t("YEIV"),r=t.n(i),o=t("gDS+"),l=t.n(o),a=t("4d7F"),u=t.n(a),d=t("GQeE"),f=t.n(d),c=t("nWCS"),s=t("5VPc"),h=t("Q8dH"),m=t("2gjT"),_=t("oV5b"),p=t("wdqA"),b={mixins:[h.a],data:function(){return{labelComponentsInjected:!1,editorComponentsInjected:!1,validators:{},recordUnwatchs:[],hasValidateListener:!1}},components:{labels:c.a,field_array_model:function(){return t.e(13).then(t.bind(null,"R4ll"))},field_array_model_json:function(){return t.e(58).then(t.bind(null,"gdQo"))},field_async_array_model:function(){return t.e(57).then(t.bind(null,"QJY0"))},field_async_array_model_json:function(){return t.e(56).then(t.bind(null,"K/Xu"))},field_async_enum_radio:function(){return t.e(55).then(t.bind(null,"TL9E"))},field_async_enum_select:function(){return t.e(26).then(t.bind(null,"Mhqh"))},field_async_model:function(){return t.e(24).then(t.bind(null,"iGBc"))},field_async_tag:function(){return t.e(54).then(t.bind(null,"yF3L"))},field_async_tag_json:function(){return t.e(53).then(t.bind(null,"3q15"))},field_bool:function(){return t.e(52).then(t.bind(null,"yp++"))},field_day:function(){return t.e(21).then(t.bind(null,"oLbi"))},field_enum_radio:function(){return t.e(51).then(t.bind(null,"0rqX"))},field_enum_select:function(){return t.e(27).then(t.bind(null,"W+A4"))},field_file_mono:function(){return t.e(50).then(t.bind(null,"WZ8Q"))},field_file_mono_json:function(){return t.e(49).then(t.bind(null,"+nxc"))},field_file_multi:function(){return t.e(1).then(t.bind(null,"6EPR"))},field_file_multi_json:function(){return t.e(48).then(t.bind(null,"Gu0a"))},field_image_mono:function(){return Promise.all([t.e(1),t.e(28)]).then(t.bind(null,"Yw9u"))},field_image_mono_json:function(){return t.e(47).then(t.bind(null,"+/MH"))},field_image_multi:function(){return Promise.all([t.e(1),t.e(29)]).then(t.bind(null,"hsso"))},field_image_multi_json:function(){return t.e(46).then(t.bind(null,"0hNI"))},field_int:function(){return t.e(45).then(t.bind(null,"LhV5"))},field_model:function(){return t.e(25).then(t.bind(null,"olIR"))},field_month:function(){return t.e(22).then(t.bind(null,"jUS4"))},field_number:function(){return t.e(20).then(t.bind(null,"Bufb"))},field_pwd:function(){return t.e(44).then(t.bind(null,"ySID"))},field_relates_array_model:function(){return t.e(43).then(t.bind(null,"9wOH"))},field_relates_array_model_json:function(){return t.e(42).then(t.bind(null,"PJns"))},field_relates_enum_radio:function(){return t.e(41).then(t.bind(null,"IOvt"))},field_relates_enum_select:function(){return t.e(19).then(t.bind(null,"RGNH"))},field_relates_model:function(){return t.e(18).then(t.bind(null,"Pl27"))},field_relates_tag:function(){return t.e(40).then(t.bind(null,"rdXM"))},field_relates_tag_json:function(){return t.e(39).then(t.bind(null,"eNNt"))},field_sex:function(){return t.e(38).then(t.bind(null,"GaY0"))},field_string:function(){return t.e(11).then(t.bind(null,"NHUl"))},field_tag:function(){return t.e(14).then(t.bind(null,"C8iI"))},field_tag_json:function(){return t.e(37).then(t.bind(null,"P+3c"))},field_text:function(){return t.e(36).then(t.bind(null,"zK17"))},field_text_rich:function(){return Promise.all([t.e(12),t.e(31),t.e(35)]).then(t.bind(null,"PR0b"))},field_ts:function(){return t.e(34).then(t.bind(null,"PF5e"))},field_year:function(){return t.e(23).then(t.bind(null,"pwcs"))},metaTable:function(){return t.e(33).then(t.bind(null,"U2jx"))}},computed:{editFieldsArray:function(){return this.fields.reduce(function(n,e){return e.reduce(function(n,e){return n.push(e),n},n),n},[])},formData:function(){var n=this;return this.editFieldsArray.reduce(function(e,t){return e[t]=n.record[t],e},{})},needInjectLabelComponents:function(){return Object(p.a)(this.field_list,this.editFieldsArray,this.mode)},needInjectEditorComponents:function(){var n=this;return this.editFieldsArray.filter(function(e){return n.field_list[e].editorComponent&&n.field_list[e].editorComponent.component}).map(function(e){return n.field_list[e].editorComponent})},hasInjectComponent:function(){return this.needInjectLabelComponents.list.length||this.needInjectEditorComponents.length},componentsInjected:function(){return this.labelComponentsInjected&&this.editorComponentsInjected}},methods:{injectLabelComponents:function(){var n=this;if(!this.needInjectLabelComponents.list.length)return this.labelComponentsInjected=!0;Object(m.a)(this,this.needInjectLabelComponents.list).then(function(){n.labelComponentsInjected=!0})},injectEditorComponents:function(){var n=this;if(!this.needInjectEditorComponents.length)return this.editorComponentsInjected=!0;Object(m.a)(this,this.needInjectEditorComponents).then(function(){n.editorComponentsInjected=!0})},validate:function(){var n=this,e=f()(this.validators),t=e.map(function(e){return n.validateField(e,n.formData[e])});return this.hasValidateListener||(e.forEach(function(e){n.validators[e].unwatch=n.addValidateInputListener(e)}),this.hasValidateListener=!0),u.a.all(t).then(function(){return JSON.parse(l()(n.formData))}).catch(function(n){return u.a.reject(n)})},validateField:function(n,e){var t=this;return new u.a(function(i,o){t.validators[n].validator.validate(r()({},n,e),function(e,r){e?(t.validators[n].hasErr=!0,t.validators[n].errMsg=e[0].message,o(e[0].message)):(t.validators[n].hasErr=!1,t.validators[n].errMsg="",i())})})},addValidateInputListener:function(n){var e=this;return this.$watch(function(){return e.record[n]},function(t){e.validateField.call(e,n,t).catch(function(){})})},initRelates:function(){var n=this;this.fields.forEach(function(e){e.forEach(function(e){n.field_list[e].editorComponent&&n.field_list[e].editorComponent.config&&n.field_list[e].editorComponent.config.relates&&(Object(s.a)(n.field_list[e].editorComponent.config.relates,n.record),n.field_list[e].editorComponent.config.relates.forEach(function(t){if("function"==typeof t.handler){var i=n.$watch(function(){return Array.isArray(t.relateField)?t.relateField.reduce(function(e,t){return e[t]=n.record[t],e},{}):n.record[t.relateField]},function n(i,r){var o=this;this.$refs[e]?t.handler.call(this.$refs[e],i,this.field_list[e],r):setTimeout(function(){n.call(o,i,r)},0)},t.config);n.recordUnwatchs.push(i)}}))})})},initValidate:function(){var n=this;this.fields.forEach(function(e){e.forEach(function(e){if(n.field_list[e].validator){var t=new _.default(r()({},e,n.field_list[e].validator));n.$set(n.validators,e,{hasErr:!1,errMsg:"",validator:t,unwatch:null}),n.autoValidate&&(n.validators[e].unwatch=n.addValidateInputListener(e))}})}),this.autoValidate&&(this.hasValidateListener=!0)}},watch:{record:{immediate:!0,handler:function(){var n=this;f()(this.validators).forEach(function(e){n.validators[e].unwatch&&n.validators[e].unwatch()}),this.validators={},this.hasValidateListener=!1,this.initValidate()}},fields:{immediate:!0,handler:function(){this.labelComponentsInjected=!1,this.editorComponentsInjected=!1,this.injectLabelComponents(),this.injectEditorComponents(),this.recordUnwatchs.forEach(function(n){n&&n()}),this.recordUnwatchs=[],this.initRelates()}}},props:{fields:{type:Array,required:!0},record:{type:Object,required:!0},field_list:{type:Object,required:!0},autoValidate:{type:Boolean,default:!1},mode:{type:String,default:"create"}}},v=(t("wXpH"),t("KHd+")),j=Object(v.a)(b,function(){var n=this,e=n.$createElement,t=n._self._c||e;return!n.hasInjectComponent||n.componentsInjected?t("meta-table",{attrs:{field_list:n.field_list,mode:n.mode,fields:n.fields},scopedSlots:n._u([{key:"label",fn:function(e){return[t("labels",{attrs:{label:n.field_list[e.field].label,labelComponent:n.needInjectLabelComponents.map[e.field]}},[n.needInjectLabelComponents.map[e.field]?t(n.needInjectLabelComponents.map[e.field].name,n._b({tag:"component",attrs:{label:n.field_list[e.field].label}},"component",n.needInjectLabelComponents.map[e.field].config||{},!1)):n._e()],1)]}},{key:"default",fn:function(e){return[t(n.field_list[e.field].editorComponent.name,n._b({ref:e.field,tag:"component",model:{value:n.record[e.field],callback:function(t){n.$set(n.record,e.field,t)},expression:"record[scope.field]"}},"component",n.mergeAttrsConfig(n.field_list[e.field].editorComponent.config,n.field_list[e.field].editorComponent[n.mode+"Config"]),!1)),n._v(" "),n.field_list[e.field].tip?t("p",{staticClass:"form-helper"},[n._v("\n            "+n._s(n.field_list[e.field].tip)+"\n        ")]):n._e(),n._v(" "),n.validators[e.field]&&n.validators[e.field].hasErr?t("p",{staticClass:"text-danger form-helper"},[n._v("\n            "+n._s(n.validators[e.field].errMsg)+"\n        ")]):n._e()]}}])}):n._e()},[],!1,null,"d984f8cc",null);e.default=j.exports}}]);
//# sourceMappingURL=59.030c89dd81f893f786c7.js.map