(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6EPR":function(e,t,i){"use strict";i.r(t);var n=i("hhQR"),a=i.n(n),s=i("gDS+"),o=i.n(s),l={props:{files:{type:Array,default:function(){return[]}},remove:{type:Function},disabled:{type:Boolean,default:!1},handlePreview:Function,listType:String},methods:{parsePercentage:function(e){return parseInt(e,10)},handleClick:function(e){this.handlePreview&&this.handlePreview(e)}}},r=i("KHd+"),u=Object(r.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition-group",{class:["el-upload-list","el-upload-list--"+e.listType,{"is-disabled":e.disabled}],attrs:{tag:"ul",name:"el-list"}},e._l(e.files,function(t,n){return i("li",{key:n,class:["el-upload-list__item","is-"+t.status]},["uploading"!==t.status&&["picture-card","picture"].indexOf(e.listType)>-1?i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:t.url,alt:""}}):e._e(),e._v(" "),i("a",{staticClass:"el-upload-list__item-name",on:{click:function(i){e.handleClick(t)}}},[i("i",{staticClass:"el-icon-document"}),e._v(e._s(t.name)+"\n    ")]),e._v(" "),i("label",{staticClass:"el-upload-list__item-status-label"},[i("i",{class:{"el-icon-upload-success":!0,"el-icon-circle-check":"text"===e.listType,"el-icon-check":["picture-card","picture"].indexOf(e.listType)>-1}})]),e._v(" "),e.disabled?e._e():i("i",{staticClass:"el-icon-close",on:{click:function(i){e.remove(t)}}}),e._v(" "),"uploading"===t.status?i("el-progress",{attrs:{type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:e.parsePercentage(t.percentage)}}):e._e(),e._v(" "),"picture-card"===e.listType?i("span",{staticClass:"el-upload-list__item-actions"},[e.handlePreview&&"picture-card"===e.listType?i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(i){e.handlePreview(t)}}},[i("i",{staticClass:"el-icon-view"})]):e._e(),e._v(" "),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(i){e.remove(t)}}},[i("i",{staticClass:"el-icon-delete2"})])]):e._e()],1)}))},[],!1,null,null,null).exports,d=i("GQeE"),c=i.n(d);var p={name:"ElUploadDrag",props:{disabled:Boolean},data:function(){return{dragover:!1}},methods:{onDragover:function(){this.disabled||(this.dragover=!0)},onDrop:function(e){this.disabled||(this.dragover=!1,this.$emit("file",e.dataTransfer.files))}}},h=Object(r.a)(p,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"el-upload-dragger",class:{"is-dragover":e.dragover},on:{drop:function(t){t.preventDefault(),e.onDrop(t)},dragover:function(t){t.preventDefault(),e.onDragover(t)},dragleave:function(t){t.preventDefault(),e.dragover=!1}}},[e._t("default")],2)},[],!1,null,null,null).exports,f={inject:["uploader"],components:{UploadDragger:h},props:{type:String,action:{type:String,required:!0},name:{type:String,default:"file"},data:Object,headers:Object,withCredentials:Boolean,multiple:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,drag:Boolean,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},fileList:Array,autoUpload:Boolean,listType:String,httpRequest:{type:Function,default:function(e){if("undefined"!=typeof XMLHttpRequest){var t=new XMLHttpRequest,i=e.action;t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var n=new FormData;e.data&&c()(e.data).forEach(function(t){n.append(t,e.data[t])}),n.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){if(t.status<200||t.status>=300)return e.onError(function(e,t,i){var n=void 0;n=i.response?i.status+" "+(i.response.error||i.response):i.responseText?i.status+" "+i.responseText:"fail to post "+e+" "+i.status;var a=new Error(n);return a.status=i.status,a.method="post",a.url=e,a}(i,0,t));e.onSuccess(function(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(e){return t}}(t))},t.open("post",i,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var a=e.headers||{};for(var s in a)a.hasOwnProperty(s)&&null!==a[s]&&t.setRequestHeader(s,a[s]);return t.send(n),t}}},disabled:Boolean},data:function(){return{mouseover:!1,reqs:{}}},methods:{isImage:function(e){return-1!==e.indexOf("image")},handleChange:function(e){var t=e.target.files;t&&this.uploadFiles(t)},uploadFiles:function(e){var t=this,i=Array.prototype.slice.call(e);this.multiple||(i=i.slice(0,1)),0!==i.length&&i.forEach(function(e){t.onStart(e),t.autoUpload&&t.upload(e)})},upload:function(e,t){var i=this;if(this.$refs.input.value=null,!this.beforeUpload)return this.post(e);var n=this.beforeUpload(e);n&&n.then?n.then(function(t){"[object File]"===Object.prototype.toString.call(t)?i.post(t):i.post(e)},function(){i.onRemove(null,e)}):!1!==n?this.post(e):this.onRemove(null,e)},abort:function(e){var t=this.reqs;if(e){var i=e;e.uid&&(i=e.uid),t[i]&&t[i].abort()}else c()(t).forEach(function(e){t[e]&&t[e].abort(),delete t[e]})},post:function(e){var t=this,i=e.uid,n={headers:this.headers,withCredentials:this.withCredentials,file:e,data:this.data,filename:this.name,action:this.action,onProgress:function(i){t.onProgress(i,e)},onSuccess:function(n){t.onSuccess(n,e),delete t.reqs[i]},onError:function(n){t.onError(n,e),delete t.reqs[i]}},a=this.httpRequest(n);this.reqs[i]=a,a&&a.then&&a.then(n.onSuccess,n.onError)},handleClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())}},render:function(e){var t=this.handleClick,i=this.drag,n=this.name,a=this.handleChange,s=this.multiple,o=this.accept,l=this.listType,r=this.uploadFiles,u=this.disabled,d={class:{"el-upload":!0},on:{click:t}};return d.class["el-upload--"+l]=!0,e("div",d,[i?e("upload-dragger",{attrs:{disabled:u},on:{file:r}},[this.$slots.default]):this.$slots.default,e("input",{class:"el-upload__input",attrs:{type:"file",name:n,multiple:s,accept:o},ref:"input",on:{change:a}})])}},m=Object(r.a)(f,void 0,void 0,!1,null,null,null).exports,v={components:{UploadDragger:h},props:{type:String,data:{},action:{type:String,required:!0},name:{type:String,default:"file"},withCredentials:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},drag:Boolean,listType:String,disabled:Boolean},data:function(){return{mouseover:!1,domain:"",file:null,submitting:!1}},methods:{isImage:function(e){return-1!==e.indexOf("image")},handleClick:function(){this.disabled||this.$refs.input.click()},handleChange:function(e){var t=e.target.value;t&&this.uploadFiles(t)},uploadFiles:function(e){if(!this.submitting){this.submitting=!0,this.file=e,this.onStart(e);var t=this.getFormNode(),i=this.getFormDataNode(),n=this.data;"function"==typeof n&&(n=n(e));var a=[];for(var s in n)n.hasOwnProperty(s)&&a.push('<input name="'+s+'" value="'+n[s]+'"/>');i.innerHTML=a.join(""),t.submit(),i.innerHTML=""}},getFormNode:function(){return this.$refs.form},getFormDataNode:function(){return this.$refs.data}},created:function(){this.frameName="frame-"+Date.now()},mounted:function(){var e=this;!this.$isServer&&window.addEventListener("message",function(t){if(e.file){var i=new URL(e.action).origin;if(t.origin===i){var n=t.data;"success"===n.result?e.onSuccess(n,e.file):"failed"===n.result&&e.onError(n,e.file),e.submitting=!1,e.file=null}}},!1)},render:function(e){var t=this.drag,i=this.uploadFiles,n=this.listType,a=this.frameName,s=this.disabled,o={"el-upload":!0};return o["el-upload--"+n]=!0,e("div",{class:o,on:{click:this.handleClick},nativeOn:{drop:this.onDrop,dragover:this.handleDragover,dragleave:this.handleDragleave}},[e("iframe",{on:{load:this.onload},ref:"iframe",attrs:{name:a}}),e("form",{ref:"form",attrs:{action:this.action,target:a,enctype:"multipart/form-data",method:"POST"}},[e("input",{class:"el-upload__input",attrs:{type:"file",name:"file",accept:this.accept},ref:"input",on:{change:this.handleChange}}),e("input",{attrs:{type:"hidden",name:"documentDomain"},domProps:{value:this.$isServer?"":document.domain}}),e("span",{ref:"data"})]),t?e("upload-dragger",{on:{file:i},attrs:{disabled:s}},[this.$slots.default]):this.$slots.default])}};function g(){}function y(e){return e}var F={name:"metaUpload",components:{UploadList:u,Upload:m,IframeUpload:Object(r.a)(v,void 0,void 0,!1,null,null,null).exports},provide:{uploader:void 0},props:{action:{type:String,required:!0},headers:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:{type:Boolean,default:!1},showFileList:{type:Boolean,default:!0},accept:{type:String},beforeUpload:{type:Function},onRemove:{type:Function,default:g},onChange:{type:Function,default:g},onPreview:{type:Function},onSuccess:{type:Function,default:g},onProgress:{type:Function,default:g},onError:{type:Function,default:g},fileList:{type:Array,default:function(){return[]}},autoUpload:{type:Boolean,default:!0},listType:{type:String,default:"text"},httpRequest:{type:Function},disabled:{type:Boolean,default:!1},getPath:{type:Function,default:y},getName:{type:Function,default:y}},data:function(){return{uploadFiles:[],dragOver:!1,draging:!1,tempIndex:1}},watch:{fileList:{immediate:!0,handler:function(e){var t=this;this.uploadFiles=e.map(function(e){return e.uid=e.uid||Date.now()+t.tempIndex++,e.status="success",e})}}},methods:{handleStart:function(e){e.uid=Date.now()+this.tempIndex++;var t={status:"ready",name:e.name,size:e.size,percentage:0,uid:e.uid,raw:e};try{t.url=URL.createObjectURL(e)}catch(e){return void console.error(e)}this.uploadFiles.push(t),this.onChange(t,this.uploadFiles)},handleProgress:function(e,t){var i=this.getFile(t);this.onProgress(e,i,this.uploadFiles),i.status="uploading",i.percentage=e.percent||0},handleSuccess:function(e,t){var i=this.getFile(t);i&&(i.status="success",i.response=e,this.onSuccess(e,i,this.uploadFiles),this.onChange(i,this.uploadFiles))},handleError:function(e,t){var i=this.getFile(t),n=this.uploadFiles;i.status="fail",n.splice(n.indexOf(i),1),this.onError(e,i,this.uploadFiles),this.onChange(i,this.uploadFiles)},handleRemove:function(e,t){t&&(e=this.getFile(t)),this.abort(e);var i=this.uploadFiles;i.splice(i.indexOf(e),1),this.onRemove(e,i)},getFile:function(e){var t=void 0;return this.uploadFiles.every(function(i){return!(t=e.uid===i.uid?i:null)}),t},abort:function(e){this.$refs["upload-inner"].abort(e)},clearFiles:function(){this.uploadFiles=[]},submit:function(){var e=this;this.uploadFiles.filter(function(e){return"ready"===e.status}).forEach(function(t){e.$refs["upload-inner"].upload(t.raw)})}},render:function(e){var t=void 0;this.showFileList&&"function"==typeof this.$scopedSlots.uploadList&&(t=this.$scopedSlots.uploadList({files:this.uploadFiles,remove:this.handleRemove}));var i={props:{drag:this.drag,action:this.action,multiple:this.multiple,"before-upload":this.beforeUpload,"with-credentials":this.withCredentials,headers:this.headers,name:this.name,data:this.data,accept:this.accept,fileList:this.uploadFiles,autoUpload:this.autoUpload,listType:this.listType,disabled:this.disabled,"on-start":this.handleStart,"on-progress":this.handleProgress,"on-success":this.handleSuccess,"on-error":this.handleError,"on-preview":this.onPreview,"on-remove":this.handleRemove,"http-request":this.httpRequest},ref:"upload-inner"},n=this.$slots.trigger||this.$slots.default,a="undefined"!=typeof FormData||this.$isServer?e("upload",i,[n]):e("iframeUpload",i,[n]);return e("div",["picture-card"===this.listType?t:"",this.$slots.trigger?[a,this.$slots.default]:a,this.$slots.tip,"picture-card"!==this.listType?t:""])}},_=Object(r.a)(F,void 0,void 0,!1,null,null,null).exports,b=i("VVEY");function S(){}function w(e){return e}var C={inheritAttrs:!0,components:{metaUpload:_,uploadList:u},mixins:[b.a],props:{listType:{type:String,default:"text"},onSuccess:{type:Function,default:S},onRemove:{type:Function,default:S},getInfoFromResponse:{type:Function,default:w},handlePreview:{type:Function,default:S},getName:{type:Function,default:w},getUrl:{type:Function,default:w}},computed:{model:{get:function(){var e=this;return this.value.map(function(t){var i=e.getName(t),n=e.getUrl(t),a=JSON.parse(o()(t));return a.name=i,a.url=n,a})},set:function(e){this.$emit("input",e)}}},methods:{handleSuccess:function(e,t,i){var n=a()(this.value).slice(0);n.push(this.getInfoFromResponse(e)),this.model=n,this.onSuccess&&this.onSuccess(e,t,i)},handleRemove:function(e){var t=this,i=e.url,n=this.value.findIndex(function(e){return t.getUrl(e)===i}),s=a()(this.value).slice(0);s.splice(n,1),this.model=s}}},$=Object(r.a)(C,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("meta-upload",e._b({attrs:{"file-list":e.model,multiple:!1,listType:e.listType,onSuccess:e.handleSuccess,onRemove:e.handleRemove},scopedSlots:e._u([{key:"uploadList",fn:function(t){return[i("upload-list",e._b({attrs:{files:t.files,remove:t.remove,listType:e.listType,handlePreview:e.handlePreview}},"upload-list",e.$attrs,!1))]}}])},"meta-upload",e.$attrs,!1),[i("template",{slot:"default"},[e._t("default")],2),e._v(" "),i("template",{slot:"tip"},[e._t("tip")],2)],2)},[],!1,null,null,null).exports,T=i("dj38"),P={name:"field_file_multi",inheritAttrs:!0,components:{field_upload:$},mixins:[b.a,T.a]},R=Object(r.a)(P,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("field_upload",e._b({model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"field_upload",e.$attrs,!1),[i("template",{slot:"default"},[e._t("default",[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])])],2),e._v(" "),[e._t("tip",[i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("由于底层框架问题一次只能上传一个文件")])])]],2)},[],!1,null,null,null);t.default=R.exports},VVEY:function(e,t,i){"use strict";t.a={props:{value:{type:Array,required:!0}}}},dj38:function(e,t,i){"use strict";t.a={computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}},hhQR:function(e,t,i){"use strict";t.__esModule=!0;var n,a=i("rfXi"),s=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return Array.isArray(e)?e:(0,s.default)(e)}}}]);
//# sourceMappingURL=1.ff6d16c5fe400f0a3a22.js.map