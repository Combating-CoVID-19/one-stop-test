$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
            $(".header").removeClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").addClass("active");
        }

     

    });
});
