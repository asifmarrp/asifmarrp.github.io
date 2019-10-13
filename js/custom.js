$(document).ready(function(){
    /*if(window.location.protocol != 'https:') {
      location.href =   location.href.replace("http://", "https://");
    }*/
    SEQ0();
});
function SEQ0(){
    var el = $('ul.logos.device .logo'),
        i = 0;
    $(el[0]).show();

    (function loop() {
        el.delay(3000).fadeOut(2500).eq(++i%el.length).fadeIn(1000, loop);
    }());
}
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}
