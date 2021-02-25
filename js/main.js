$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    $('.menu__burger').click(function() {
        $('.menu__burger, .header__menu, .menu').toggleClass('active');
    });
});