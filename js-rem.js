;(function(window){
    var doc = window.document, 
        docEle = doc.documentElement,
        designWidth = 960,                  //设计图宽度
        baseWidth = 100,                    //基准宽度
        maxWidth = 640,                     //最大宽度
        resize = 'onorientationchange' in window ? 'orientationchange' : 'resize', 
        resizeEvent = function(){
            var pageWidth = docEle.clientWidth;
            if( pageWidth > maxWidth ){
                pageWidth = maxWidth;
            }
            docEle.style.fontSize = baseWidth * ( pageWidth / designWidth ) + 'px';
        };

    doc.addEventListener('DOMContentLoaded', resizeEvent, false);
    window.addEventListener( resize, resizeEvent, false); 
})(window);
