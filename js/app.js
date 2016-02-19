$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 50) {
        $("#menu-scroll").addClass("active");
    } else {
        $("#menu-scroll").removeClass("active");
    }

});
