var prevScrollpos = window.pageYOffset;
var cabecalho = document.getElementById("cabecalho");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        cabecalho.classList.add("scrollDown");
        cabecalho.classList.remove("scrollUp");
    } else {
        cabecalho.classList.add("scrollUp"); 
        cabecalho.classList.remove("scrollDown");               
    }
    prevScrollpos = currentScrollPos;
}

$('.navegacao, .me-conheca').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

