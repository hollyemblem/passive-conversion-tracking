(function($) {
    var onScreen = false;
    $(document).scroll(function(event) {
        var screenTest = $('.cta').isOnScreen();
        if (screenTest && !onScreen) {
            $('.cta').addClass('onScreen');
            var $callToAction = document.querySelector("a.cta.onScreen").getAttribute("href");
            onScreen = true;
            ga('send', 'event', 'CTA', 'Visible', $callToAction,{
  nonInteraction: true
});
        } else {}
    });
})(jQuery);