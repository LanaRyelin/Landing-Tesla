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

    // Модальное окно
    $('.btn-order').click(function() {
        $('#modal').fadeIn(500);
    });
    $('.modal__close').click(function() {
        $('#modal').fadeOut(500);
    });
    $('.modal__area').click(function() {
        $('#modal').fadeOut(500);
    });
});