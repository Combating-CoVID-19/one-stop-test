$(window).on("scroll", function() {

  if($(window).scrollTop() > $(".img-elements-cntnr").height()*.5) {

    $(".txt-1").animate({opacity: 1}, 500);
    $(".blurb-1").animate({opacity: 1}, 500);
    $(".imp-btn-1").animate({opacity: 1}, 500);
    }
    if($(window).scrollTop() > $(".img-elements-cntnr").height()*.7) {
        $(".img-elements-cntnr").hide();
      } else {
        $(".img-elements-cntnr").show();
      }
    if($(window).scrollTop() > $(".img-elements-cntnr").height()*1.3) {
      $(".txt-2").animate({opacity: 1}, 500);
      $(".blurb-2").animate({opacity: 1}, 500);
      $(".imp-btn-2").animate({opacity: 1}, 500);
      }
      if($(window).scrollTop() > $(".img-elements-cntnr").height()*2.2) {
        $(".txt-3").animate({opacity: 1}, 500);
        $(".blurb-3").animate({opacity: 1}, 500);
        $(".imp-btn-3").animate({opacity: 1}, 500);
        }
        if($(window).scrollTop() > $(".img-elements-cntnr").height()*3) {
          $(".txt-4").animate({opacity: 1}, 500);
          $(".blurb-4").animate({opacity: 1}, 500);
          $(".imp-btn-4").animate({opacity: 1}, 500);
          }
          if($(window).scrollTop() > $(".img-elements-cntnr").height()*3.4) {
            $(".txt-5").animate({opacity: 1}, 500);
            $(".blurb-5").animate({opacity: 1}, 500);
            $(".imp-btn-5").animate({opacity: 1}, 500);
            }

});
