function initMobileMenu() {
    function toggle() {
        $('.mobile-menu').toggleClass('mobile-menu--hidden');
        $('.mobile-menu').toggleClass('mobile-menu--visible');
    }

    $('.menu-button').click(toggle);
    $('.close-nav-icon').click(toggle);
}

// Init for all views
$(function () {
    initMobileMenu();

    if($('.map')){
        initMap();
        initTools();
    }
});