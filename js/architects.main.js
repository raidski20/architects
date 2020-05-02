$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

$('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
});