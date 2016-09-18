;(function(window){
    var doc = window.document, 
        docEle = doc.documentElement,
        designWidth = 960,                  //设计图宽度
        baseWidth = 100,                    //基准宽度
        maxWidth = 640,                     //最大宽度
        resize = 'onorientationchange' in window ? 'orientationchange' : 'resize', 
        resizeHandler = function(){
            var pageWidth = docEle.clientWidth;
            if( maxWidth && (pageWidth > maxWidth) ){
                pageWidth = maxWidth;
            }
            docEle.style.fontSize = baseWidth * ( pageWidth / designWidth ) + 'px';
        };

    doc.addEventListener('DOMContentLoaded', resizeHandler, false);
    window.addEventListener( resize, resizeHandler, false); 
})(window);
