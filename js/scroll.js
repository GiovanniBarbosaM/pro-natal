$(document).ready(function() {
    $(".seta").hide(); // garante que a seta comece escondida

    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if(top > 480) {
            $(".seta").fadeIn(400); // aparece suavemente
        } else {
            $(".seta").fadeOut(400); // desaparece suavemente
        }
    });

    // Clique na seta para voltar ao topo
    $(".seta a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 600);
    });
});
