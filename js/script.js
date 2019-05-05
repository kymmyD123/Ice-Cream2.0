//$('.menu-btn').on('click', function () {
    //$(this).toggleClass('menu-btn__active');
// });
$('.menu-btn, .main-header__navigation--mobile').click(function(){
    $('.main-header__navigation--mobile').toggleClass('main-header__navigation--mobile-active');
})
$(document).click(function(event) {
    if ($(event.target).closest(".menu-btn").length ) return;
    $('.main-header__navigation--mobile').removeClass('main-header__navigation--mobile-active');
    event.stopPropagation();
})
$('.menu-btn').click(function(){
    $('.menu-btn').toggleClass('menu-btn__active');
});
