(window.webpackJsonp=window.webpackJsonp||[]).push([[68,33],{"0tVQ":function(e,n,t){t("FlQf"),t("VJsP"),e.exports=t("WEpk").Array.from},"2gjT":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var i=t("4d7F"),o=t.n(i),r=t("GQeE"),l=t.n(r);function a(e,n){Array.isArray(n)||(n=l()(n).map(function(e){return{name:e,component:n[e]}})),n.forEach(function(n){e.$options.components[n.name]=n.component});var t=n.filter(function(e){var n=e.component;return"function"==typeof n&&!n.cid}).map(function(n){var t=n.component,i=n.name;return t().then(function(n){e.$options.components[i]=n})});return o.a.all(t)}},Eb8x:function(e,n,t){"use strict";t.r(n);var i=t("4d7F"),o=t.n(i),r=t("GQeE"),l=t.n(r),a=t("U2jx"),s=t("nWCS"),c=t("c5sh"),d=t("Q8dH"),u=t("2gjT"),f=t("lhuP"),p=t("wdqA"),m={name:"info",inheritAttrs:!0,components:{metaTable:a.default,views:c.a,labels:s.a},mixins:[d.a],data:function(){return{injectInited:!1,labelComponentsInjected:!1,viewComponentsInjected:!1,isShowLightbox:!1,fields:[],record:{},canInitDialog:!1}},props:{field_list:{type:Object,required:!0},getDetailInfo:{type:Function,required:!0},data:{type:Object,required:!0},triggerConfig:{type:Object,default:function(){return{}}},dialogConfig:{type:Object,default:function(){return{}}}},computed:{needInjectViewComponents:function(){var e=this;return l()(this.field_list).filter(function(n){return e.field_list[n].view&&e.field_list[n].view.component}).map(function(n){return e.field_list[n].view})},hasInjectComponent:function(){return this.needInjectLabelComponentsList.length||this.needInjectViewComponents.length},componentsInjected:function(){return this.labelComponentsInjected&&this.viewComponentsInjected}},methods:{handleClick:function(){var e=this;if(!this.injectInited){var n=Object(p.a)(this.field_list,l()(this.field_list),"info"),t=n.list,i=n.map;this.needInjectLabelComponentsList=t,this.needInjectLabelComponentsMap=i,this.injectLabelComponents(),this.injectViewComponents(),this.injectInited=!0}new o.a(function(n,t){e.getDetailInfo(n)}).then(function(n){var t=n.fields,i=n.record;e.fields=t,e.record=i,e.canInitDialog=!0,e.isShowLightbox=!0}).catch(f.c)},injectLabelComponents:function(){var e=this;if(!this.needInjectLabelComponentsList.length)return this.labelComponentsInjected=!0;Object(u.a)(this,this.needInjectLabelComponentsList).then(function(){e.labelComponentsInjected=!0})},injectViewComponents:function(){var e=this;if(!this.needInjectViewComponents.length)return this.viewComponentsInjected=!0;Object(u.a)(this,this.needInjectViewComponents).then(function(){e.viewComponentsInjected=!0})}}},h=t("KHd+"),b=Object(h.a)(m,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-button",e._b({on:{click:e.handleClick}},"el-button",e.triggerConfig,!1),[e._v("\n        "+e._s(e.triggerConfig.text)+"\n    ")]),e._v(" "),e.canInitDialog?t("el-dialog",e._b({attrs:{visible:e.isShowLightbox},on:{"update:visible":function(n){e.isShowLightbox=n}}},"el-dialog",e.dialogConfig,!1),[!e.hasInjectComponent||e.componentsInjected?t("meta-table",{attrs:{field_list:e.field_list,fields:e.fields,mode:"info"},scopedSlots:e._u([{key:"label",fn:function(n){return[t("labels",{attrs:{label:e.field_list[n.field].label,labelComponent:e.needInjectLabelComponentsMap[n.field]}},[e.needInjectLabelComponentsMap[n.field]?t(e.needInjectLabelComponentsMap[n.field].name,e._b({tag:"component",attrs:{label:e.field_list[n.field].label}},"component",e.needInjectLabelComponentsMap[n.field].config||{},!1)):e._e()],1)]}},{key:"default",fn:function(n){return[t("views",{attrs:{descriptor:e.field_list[n.field],record:e.record,field:n.field},scopedSlots:e._u([{key:"default",fn:function(i){return e.field_list[n.field].view&&e.field_list[n.field].view.component?[t(e.field_list[n.field].view.name,e._b({tag:"component"},"component",i,!1))]:void 0}}])})]}}])}):e._e()],1):e._e()],1)},[],!1,null,null,null);n.default=b.exports},IP1Z:function(e,n,t){"use strict";var i=t("2faE"),o=t("rr1i");e.exports=function(e,n,t){n in e?i.f(e,n,o(0,t)):e[n]=t}},Q8dH:function(e,n,t){"use strict";var i=t("P2sY"),o=t.n(i),r=t("m1cH"),l=t.n(r),a=t("EJiy"),s=t.n(a);n.a={methods:{mergeAttrsConfig:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n=n.filter(function(e){return e&&"object"===(void 0===e?"undefined":s()(e))}),o.a.apply(Object,[{},this.$attrs].concat(l()(n)))}}}},U2jx:function(e,n,t){"use strict";t.r(n);var i=t("m1cH"),o=t.n(i),r=t("AyUB"),l=t.n(r),a=t("EJiy"),s=t.n(a),c=t("GQeE"),d=t.n(c),u={label:1,field:1},f={props:{fields:{type:Array,required:!0},mode:{type:String,required:!0},field_list:{type:Object,required:!0}},computed:{colspanMapByField:function(){var e=this;return d()(this.field_list).reduce(function(n,t){var i=u,o=e.field_list[t].colspan;if(o){if(o[e.mode])i=o[e.mode];else if(o.default&&(i=o.default,"object"===s()(o.default))){var r=o.default.exclude;Array.isArray(r)&&r.includes(e.mode)&&(i=u)}"object"!==(void 0===i?"undefined":s()(i))&&(i={label:1,field:i})}return n[t]=i,n},l()(null))},rowColspans:function(){var e=this;return this.fields.map(function(n){return n.reduce(function(n,t){var i=e.colspanMapByField[t];return n+i.label+i.field},0)})},maxCol:function(){return Math.max.apply(Math,o()(this.rowColspans))},restCols:function(){var e=this;return this.rowColspans.map(function(n){return e.maxCol-n})}}},p=t("KHd+"),m=Object(p.a)(f,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"table"},[t("tbody",e._l(e.fields,function(n,i){return t("tr",{key:i},[e._l(n,function(n){return[t("td",{attrs:{colspan:e.colspanMapByField[n].label}},[e._t("label",null,{field:n})],2),e._v(" "),t("td",{attrs:{colspan:e.colspanMapByField[n].field}},[e._t("default",null,{field:n})],2)]}),e._v(" "),e.restCols[i]?t("td",{attrs:{colspan:e.restCols[i]}}):e._e()],2)}))])},[],!1,null,null,null);n.default=m.exports},VJsP:function(e,n,t){"use strict";var i=t("2GTP"),o=t("Y7ZC"),r=t("JB68"),l=t("sNwI"),a=t("NwJ3"),s=t("tEej"),c=t("IP1Z"),d=t("fNZA");o(o.S+o.F*!t("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,o,u,f=r(e),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,b=void 0!==h,v=0,j=d(f);if(b&&(h=i(h,m>2?arguments[2]:void 0,2)),void 0==j||p==Array&&a(j))for(t=new p(n=s(f.length));n>v;v++)c(t,v,b?h(f[v],v):f[v]);else for(u=j.call(f),t=new p;!(o=u.next()).done;v++)c(t,v,b?l(u,h,[o.value,v],!0):o.value);return t.length=v,t}})},YEIV:function(e,n,t){"use strict";n.__esModule=!0;var i,o=t("SEkw"),r=(i=o)&&i.__esModule?i:{default:i};n.default=function(e,n,t){return n in e?(0,r.default)(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},c5sh:function(e,n,t){"use strict";var i=t("QbLZ"),o=t.n(i),r=t("GQeE"),l=t.n(r),a=t("YEIV"),s=t.n(a),c=t("EJiy"),d=t.n(c);n.a={functional:!0,render:function(e,n){var t=n.props,i=n.data,r=t.record[t.field];if(!t.descriptor.view)return e("span",[r]);var a=t.descriptor.view,c=a.config,u=void 0===c?{}:c,f=a.join,p=a.component,m=a.handler,h=!1;if("object"===(void 0===f?"undefined":d()(f))){h=!0;var b=t.record.hasOwnProperty(t.field)?s()({},t.field,r):{};r=Array.isArray(f)?f.reduce(function(e,n){return e[n]=t.record[n],e},b):l()(f).reduce(function(e,n){return e[f[n]]=t.record[n],e},b)}if(p){var v=void 0;return v=h?o()({},r,u):o()({data:r},u),i.scopedSlots.default(v)}return m?e("span",[m(r,u)]):void 0},props:{descriptor:{type:Object,required:!0},record:{type:Object,required:!0},field:{type:String,required:!0}}}},m1cH:function(e,n,t){"use strict";n.__esModule=!0;var i,o=t("rfXi"),r=(i=o)&&i.__esModule?i:{default:i};n.default=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return(0,r.default)(e)}},nWCS:function(e,n,t){"use strict";n.a={functional:!0,props:{label:{type:String},labelComponent:{type:Object}},render:function(e,n){var t=n.props,i=n.slots;return t.labelComponent&&t.labelComponent?i().default:e("span",[t.label])}}},rfXi:function(e,n,t){e.exports={default:t("0tVQ"),__esModule:!0}},wdqA:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var i=t("AyUB"),o=t.n(i);function r(e,n,t){var i=n.reduce(function(n,i){var o=e[i].labelComponent,r=void 0;if(o)if(o[t])r=o[t];else{var l=o.default;if(l){var a=l.exclude;Array.isArray(a)&&a.includes(t)||(r=l)}}return r&&n.push({field:i,name:r.name,component:r.component,config:r.config}),n},[]);return{list:i,map:i.reduce(function(e,n){return e[n.field]=n,e},o()(null))}}}}]);
//# sourceMappingURL=68.9ecf59dbc457dd11de66.js.map