$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $(".nav-wrapper").css("background", "#c6c6c6f0");
            $(".nav-tabs").css("color", "#000");
            $(".nav-wrapper").css("width", "100%");
            $(".nav-wrapper").css("margin", "0%");

        } else {
            $(".nav-wrapper").css("background", "transparent");
            $(".nav-wrapper").css("width", "90%");
            $(".nav-wrapper").css("margin-left", "1rem");

        }
    });
});