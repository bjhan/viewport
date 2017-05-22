/**
 * Created by Administrator on 2017/2/17.
 */
function setViewport(w,h){
    console.log(document.documentElement);
    var sw;

    if(sessionStorage.getItem("widthkey")==null){
        sw=window.innerWidth;
        sessionStorage.setItem("widthkey",sw);
    }else{
        sw=sessionStorage.getItem("widthkey");
    }
    //localStorage.clear("width");
    var sh=window.innerHeight;
    var scale1=sw/sh;
    var scale2=w/h;
    var width= 0;
    var height=0;
    //if(scale1>scale2){
    //    width=Math.floor(h*scale1);
    //    height=h;
    //}else{
        height=Math.floor(w/scale1);
        width=w;
    //}
    var sca=sw/width;
    //vp.content='width='+width+',height='+height+',initial-scale = '+sca+',minimum-scale='+sca+',maximum-scale='+sca+'';
    vp.content='initial-scale = '+sca+',minimum-scale='+sca+',maximum-scale='+sca+'';
}
