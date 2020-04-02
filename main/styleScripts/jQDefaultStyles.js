$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }

        if($(window).scrollTop() > $(".better").height()*.4) {
          $(".txt").fadeIn(1000);
          $(".imp-btn-2").fadeIn(1000);
            // $(".txt").hide();
          }

    });
});
