;(function(window){
    var document = window.document, 
        docEle = document.documentElement,
        designWidth = 960,                  //设计图宽度
        baseWidth = 100,                    //基准宽度
        maxWidth = 640,                     //最大宽度
        callback = function(){
            var pageWidth = docEle.clientWidth;
            if( maxWidth && (pageWidth > maxWidth) ){
                pageWidth = maxWidth;
            }
            docEle.style.fontSize = baseWidth * ( pageWidth / designWidth ) + 'px';
        };

    window.addEventListener('DOMContentLoaded', callback);
    window.addEventListener( 'resize', callback); 
})(window);
