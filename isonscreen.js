//https://github.com/moagrius/isOnScreen/blob/master/jquery.isonscreen.min.js

//http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen#h-o

$.fn.isOnScreen = function(){
    var element = this.get(0);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
