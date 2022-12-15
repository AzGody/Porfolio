$(function () {
    // $('nav').addClass('desk');
    var navPos = $('nav').position().top;
    var testPos = $('.testtest').height()
    var lastPos = 0;
    console.log('salut')
    $(window).on('scroll', function () {
        var pos = $(window).scrollTop();

        if (pos >= testPos + $('.skills li span span').height()+20 && lastPos < pos) {
            console.log('skills')
            $('.skills li span span').addClass('active');
        }
        if (pos < testPos - 300 && lastPos > pos) {
            console.log('pas nav')
            $('.skills li span span').removeClass('active');
        }
        // if (pos >= navPos + $('nav').height() && lastPos < pos) {
        //     console.log('nav')
        //     $('nav').addClass('fixed');
        // }
        // if (pos < navPos && lastPos > pos) {
        //     console.log('pas nav')
        //     $('nav').removeClass('fixed');
        // }
        lastPos = pos;
    })
})