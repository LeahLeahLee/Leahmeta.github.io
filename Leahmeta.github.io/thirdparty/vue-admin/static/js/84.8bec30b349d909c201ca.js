(window.webpackJsonp=window.webpackJsonp||[]).push([[84,92],{"/f1G":function(e,t,n){e.exports={default:n("nhzr"),__esModule:!0}},"0Aeb":function(e,t,n){"use strict";t.a={props:{labelfield:{type:String,default:"label"},valuefield:{type:String,default:"value"}}}},B9Yq:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},C8iI:function(e,t,n){"use strict";n.r(t);var a=n("yeWE"),r=n("dj38"),i=n("0Aeb"),o=n("VVEY"),l=n("fm5Q"),u={name:"field_tag",mixins:[a.a,r.a,i.a,o.a,l.a]},s=n("KHd+"),c=Object(s.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",e._b({model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"el-checkbox-group",e.$attrs,!1),e._l(e.candidate,function(t){return n("el-checkbox",{key:t[e.valuefield],attrs:{label:t[e.valuefield]}},[e._v("\n        "+e._s(t[e.labelfield])+"\n    ")])}))},[],!1,null,null,null);t.default=c.exports},E8gZ:function(e,t,n){var a=n("w6GO"),r=n("NsO/"),i=n("NV0k").f;e.exports=function(e){return function(t){for(var n,o=r(t),l=a(o),u=l.length,s=0,c=[];u>s;)i.call(o,n=l[s++])&&c.push(e?[n,o[n]]:o[n]);return c}}},G7mT:function(e,t,n){"use strict";var a=n("FyfS"),r=n.n(a),i=n("/f1G"),o=n.n(i),l=n("4d7F"),u=n.n(l),s=n("lhuP");t.a={props:{relates:{type:Array,default:function(){return[]}},httpRequest:{type:Function,required:!0},labelfield:{type:String,default:"label"},valuefield:{type:String,default:"value"},handleInvalidRelateIds:{type:Function,default:function(){}}},methods:{getOptions:function(){var e=this;if(this.hasValidIds){if(!this.hasCachedOptions){var t={},n={};this.relates.forEach(function(e){var a=e.hasOwnProperty("requestField")?e.requestField:e.relateField;t[a]=e.value,n[e.relateField]=e.value}),new u.a(function(n,a){e.httpRequest(n,t)}).then(function(t){e.setCacheOptions(t,n)}).catch(s.c)}}else this.handleInvalidRelateIds()},setCacheOptions:function(e,t){for(var n=this.optionsCache,a=this.relates.length,r=0;r<a-1;){var i=t[this.relates[r++].relateField];n.hasOwnProperty(i)||this.$set(n,i,{}),n=n[i]}this.$set(n,this.relates[a-1].value,e)}},computed:{finalOptions:function(){if(!this.hasValidIds||!this.hasCachedOptions)return[];for(var e=this.relates.length,t=0,n=this.optionsCache;t<e;)n=n[this.relates[t++].value];return n},allOptions:function(){var e=this.relates.length,t=0,n=[];for(n[0]=[this.optionsCache];t<e;)n[t+1]=n[t].reduce(function(e,t){var n=o()(t);return e.concat(n)},[]),t++;var a=this.valuefield,r=n[t].reduce(function(e,t){return t.reduce(function(e,t){return e[t[a]]=t,e},e),e},{});return o()(r)},hasValidIds:function(){var e=!0,t=!1,n=void 0;try{for(var a,i=r()(this.relates);!(e=(a=i.next()).done);e=!0){var o=a.value;if(o.value===o.invalidValue)return!1}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}return!0},hasCachedOptions:function(){for(var e=this.optionsCache,t=this.relates.length,n=0,a=void 0;n<t;){if(a=this.relates[n++].value,!e.hasOwnProperty(a))return!1;e=e[a]}return!0}},data:function(){return{optionsCache:{}}},watch:{relates:{handler:"getOptions",deep:!0,immediate:!0}}}},JEAp:function(e,t,n){var a,r=r||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,r=/constructor/i.test(e.HTMLElement)||e.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),o=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},l=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},s=function(s,c,d){d||(s=u(s));var f,h=this,v="application/octet-stream"===s.type,p=function(){!function(e,t,n){for(var a=(t=[].concat(t)).length;a--;){var r=e["on"+t[a]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){o(e)}}}(h,"writestart progress write writeend".split(" "))};if(h.readyState=h.INIT,a)return f=t().createObjectURL(s),void setTimeout(function(){var e,t;n.href=f,n.download=c,e=n,t=new MouseEvent("click"),e.dispatchEvent(t),p(),l(f),h.readyState=h.DONE});!function(){if((i||v&&r)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=i?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,h.readyState=h.DONE,p()},n.readAsDataURL(s),void(h.readyState=h.INIT)}f||(f=t().createObjectURL(s)),v?e.location.href=f:e.open(f,"_blank")||(e.location.href=f);h.readyState=h.DONE,p(),l(f)}()},c=s.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null,function(e,t,n){return new s(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */void 0!==e&&e.exports?e.exports.saveAs=r:null!==n("B9Yq")&&null!==n("PDX0")&&(void 0===(a=function(){return r}.call(t,n,t,e))||(e.exports=a))},PDX0:function(e,t){(function(t){e.exports=t}).call(this,{})},VVEY:function(e,t,n){"use strict";t.a={props:{value:{type:Array,required:!0}}}},dj38:function(e,t,n){"use strict";t.a={computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}},fW1p:function(e,t,n){var a=n("Y7ZC"),r=n("E8gZ")(!1);a(a.S,"Object",{values:function(e){return r(e)}})},fm5Q:function(e,t,n){"use strict";t.a={props:{candidate:{type:Array,required:!0}}}},lhuP:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return l});var a=n("JEAp"),r=n.n(a);Object.prototype.toString;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return e.reduce(function(e,a){return e[a[n]]=a[t],e},{})}function o(e){console&&console.log&&console.log(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"template",n=arguments[2];e instanceof Blob||("string"==typeof e&&(e=[e]),e=new Blob(e,n)),r.a.saveAs(e,t)}},nhzr:function(e,t,n){n("fW1p"),e.exports=n("WEpk").Object.values},rdXM:function(e,t,n){"use strict";n.r(t);var a=n("C8iI"),r=n("G7mT"),i=n("VVEY"),o=n("dj38"),l={name:"field_relates_tag",inheritAttrs:!0,mixins:[r.a,i.a,o.a],components:{field_tag:a.default}},u=n("KHd+"),s=Object(u.a)(l,function(){var e=this,t=e.$createElement;return(e._self._c||t)("field_tag",e._b({attrs:{candidate:e.finalOptions,labelfield:e.labelfield,valuefield:e.valuefield,isCandidateValid:e.hasCachedOptions},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"field_tag",e.$attrs,!1))},[],!1,null,null,null);t.default=s.exports},yeWE:function(e,t,n){"use strict";var a=n("m1cH"),r=n.n(a),i=n("FyfS"),o=n.n(i),l=n("jWXv"),u=n.n(l),s=n("P2sY"),c=n.n(s),d=n("FFBG");t.a=c()({},d.b,{methods:{validateOption:function(){if(this.isCandidateValid){var e=new u.a,t=!0,n=!1,a=void 0;try{for(var i,l=o()(this.candidate);!(t=(i=l.next()).done);t=!0){var s=i.value;e.add(s[this.valuefield])}}catch(e){n=!0,a=e}finally{try{!t&&l.return&&l.return()}finally{if(n)throw a}}var c=new u.a,d=(this.value.length,!0),f=!1,h=void 0;try{for(var v,p=o()(this.value);!(d=(v=p.next()).done);d=!0){var y=v.value;if(!e.has(y))return void this.handleInvalidValue(this.value,[].concat(r()(e)));if(c.has(y))return void this.handleInvalidValue(this.value,[].concat(r()(e)));c.add(y)}}catch(e){f=!0,h=e}finally{try{!d&&p.return&&p.return()}finally{if(f)throw h}}}}}})}}]);
//# sourceMappingURL=84.8bec30b349d909c201ca.js.map