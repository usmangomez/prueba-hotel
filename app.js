$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        dotsContainer: '.owl-dots',
        autoplay: true,
        autoplayTimeout: 5000
    })
});

let selector = $('.owl-carousel');

$('.my-next-button').click(function () {
    selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function () {
    selector.trigger('prev.owl.carousel');
});

$(document).ready(function () {
    $('body').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta) $('main').removeClass('hide');
    });
});