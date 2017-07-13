$(document).ready(function () {

    $('.nav_toggle_btn').click(function () {
        if (parseInt($('.sidebar-menu').css('left'))>=0){
            $('.sidebar-menu').stop().animate({'left': '-170px'}, 500);
            $('.block-wrapper').animate({'padding-left': '60px'}, 500);
            $('.nav-stacked').addClass('nav-active');
        }
        else {
            $('.sidebar-menu').stop().animate({'left': '0'}, 500);
            $('.block-wrapper').animate({'padding-left': '230px'}, 500);
            $('.nav-stacked>li:after').css({'opacity': '0'}, 500);
            $('.nav-stacked').removeClass('nav-active');
        }
        return false
    });

});