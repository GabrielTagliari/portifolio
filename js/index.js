$('.navegacao, .me-conheca, .avancar').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});