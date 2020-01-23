$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.scrollTopButton').addClass('show');
        } else {
            $('.scrollTopButton').removeClass('show');
        }
    });

    $('.scrollTopButton').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 400, 'linear');
    });
});