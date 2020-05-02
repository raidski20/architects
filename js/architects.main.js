$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

$('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
});

// $('.navbar-nav li a').click(function () {
//     $('html, body').animate({
//         scrollTop: $('#' + $(this).data('value')).offset().top
//     }, 1000);
// });