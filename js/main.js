$(document).ready(function () {
    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('mobile-menu-active')
    })
})

$(document).ready(function () {
    $('.menu-opener-section').on('click', function (a) {
        a.preventDefault();
        $('.section-header-holder').toggleClass('mobile-menu-section-active')
    })
})
