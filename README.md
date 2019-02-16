# Leahmeta.github.io
一些前端作品


这是我忘掉Google邮箱后的第一个仓库，虽然那里有以前做过的Java，但是没办法，我就是忘记了，重新开始吧！


canvas还没学会，就先放着慢慢看


JavaScript表单焦点自动切换代码参考
<script>
window.onload=function(){
　　　　　　var form=document.getElementsByTagName('form')[0];
　　　　　　var txt=form.elements['txt1'];
　　　　　　var txt1=form.elements['txt2'];
　　　　　txt.onkeyup=function(){
　　　　　　if(this.value.length==this.maxLength){
　　　　　　　　for(var i=0;i<form.elements.length;i++){
　　　　　　　　　　if(form.elements[i]==this){
　　　　　　　　　　form.elements[i+1].focus();
　　　　　　　　}　　
　　　　　　}
　　　　}
　　}
}
</script>


关于组织默认的表单验证：（之前从未了解过的方面！！！）
默认行为就是浏览器直接把表单提交
并依照html上的属性
以在原页面打开/在新页面打开/作为下载文件下载等方式处理浏览器的响应
js就完全无法处理这些行为
但是还是没有完全理解，先照着写了个代码，有效果


自定义错误信息
记下这个网站：http://www.javascripter.net/faq/err_demo.htm?customHandler


多级联动
参考网址：http://blog.csdn.net/oukunqing/article/details/43406435


日期多级联动 
就试试能不能起个中文名字，和上面一样，就是日期有算法












