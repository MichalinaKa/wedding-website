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


function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("29 August 2020 18:00:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>dni</span>");
    $("#hours").html(hours + "<span>godzin</span>");
    $("#minutes").html(minutes + "<span>minut</span>");
    $("#seconds").html(seconds + "<span>sekund</span>");

}

setInterval(function () { makeTimer(); }, 1000);