$(document).ready(function() {
    $('.header__nav__button').click(function(){
        $('.header__nav__button').toggleClass('nav__button_active');
        $('.header__nav__list-mobile').toggleClass('nav__list-mobile-active');
    });
});