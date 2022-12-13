$(function () {
    // $('nav').addClass('desk');
    var navPos = $('nav').position().top;
    var lastPos = 0;
    console.log('salut')
    $(window).on('scroll', function () {
        var pos = $(window).scrollTop();

        if (pos >= navPos + $('nav').height() && lastPos < pos) {
            console.log('nav')
            $('nav').addClass('fixed');
        }
        if (pos < navPos && lastPos > pos) {
            console.log('pas nav')
            $('nav').removeClass('fixed');
        }
        lastPos = pos;
    })
})