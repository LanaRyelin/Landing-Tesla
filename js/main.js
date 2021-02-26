$(document).ready(function() {
    // Прокрутка на 2 секцию
    $('a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // Выпадающее меню
    $('.menu__burger').click(function() {
        $('.menu__burger, .header__menu, .menu').toggleClass('active');
    });

    // Изменяющийся title в header
    $('.menu-list__item').click(function() {
        let change = $(this).text();
        let title = $('#header-title');
        if(change != title.text()) {
            $('.menu-list__item').removeClass('active');
            $(this).addClass('active');
            title.fadeOut(300, function() {
                title.text(change).fadeTo( 600, 1, "linear" );
            });
        }        
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