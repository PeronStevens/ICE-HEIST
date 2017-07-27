$(function(){

    
    $(".home").fadeIn(4000);

    $(".about").click(function(e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    $(".music").click(function(e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#music").offset().top
        }, 1000);
    });    
})
