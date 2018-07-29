var prevScrollpos = window.pageYOffset;
var cabecalho = document.getElementById("cabecalho");
var anoNascimento = new Date(1993, 04, 25);
var hoje = new Date();
var idade = Math.floor((hoje-anoNascimento) / (365.25 * 24 * 60 * 60 * 1000));

$('#idade').html(idade+' anos');

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

$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
        location.href="#fechar";
    }   
});