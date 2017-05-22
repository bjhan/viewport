# viewport
通过viewport来适配
只需要调用setViewport()函数即可<br/>
function setViewport(w,h){<br/>
   var sw;<br/>
    if(sessionStorage.getItem("widthkey")==null){<br/>
        sw=window.innerWidth;<br/>
        sessionStorage.setItem("widthkey",sw);<br/>
    }else{<br/>
        sw=sessionStorage.getItem("widthkey");<br/>
    }<br/>
    var sh=window.innerHeight;<br/>
    var scale1=sw/sh;<br/>
    var scale2=w/h;<br/>
    var width= 0;<br/>
    var height=0;<br/>
    height=Math.floor(w/scale1);<br/>
    width=w;<br/>
    var sca=sw/width;<br/>
    vp.content='initial-scale = '+sca+',minimum-scale='+sca+',maximum-scale='+sca+'';<br/>
}<br/>
setViewport中的参数w即设计稿的宽度<br/>
从代码中我们不难看出主要是根据设计稿的宽度和屏幕实际宽度作比较，然后根据这个比例来设置scale，以达到页面适配的<br/>效果。
这个方法的缺点就是在你加载页面的时候会缓存比例，也就是说并不能浏览器刷新适配，比如chrome，当然如果故意使用错误<br/>语法，当页面调整到自己想要适配的尺寸在修改正确也是一种方法吧。
