$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
            $(".header").removeClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").addClass("active");
        }

        if($(window).scrollTop() > $(".better").height()*.5) {

          $(".txt-1").animate({opacity: 1}, 500);
          $(".blurb-1").animate({opacity: 1}, 500);
          $(".imp-btn-1").animate({opacity: 1}, 500);
          }
          if($(window).scrollTop() > $(".better").height()*.7) {
              $(".img-elements-cntnr").hide();
            } else {
              $(".img-elements-cntnr").show();
            }
          if($(window).scrollTop() > $(".better").height()*1.3) {
            $(".txt-2").animate({opacity: 1}, 500);
            $(".blurb-2").animate({opacity: 1}, 500);
            $(".imp-btn-2").animate({opacity: 1}, 500);
            }
            if($(window).scrollTop() > $(".better").height()*2.2) {
              $(".txt-3").animate({opacity: 1}, 500);
              $(".blurb-3").animate({opacity: 1}, 500);
              $(".imp-btn-3").animate({opacity: 1}, 500);
              }
              if($(window).scrollTop() > $(".better").height()*3) {
                $(".txt-4").animate({opacity: 1}, 500);
                $(".blurb-4").animate({opacity: 1}, 500);
                $(".imp-btn-4").animate({opacity: 1}, 500);
                }
                if($(window).scrollTop() > $(".better").height()*3.4) {
                  $(".txt-5").animate({opacity: 1}, 500);
                  $(".blurb-5").animate({opacity: 1}, 500);
                  $(".imp-btn-5").animate({opacity: 1}, 500);
                  }

    });
});
