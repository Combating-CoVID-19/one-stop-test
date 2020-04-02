$(window).on("scroll", function() {

if($(window).scrollTop() > $(".better").height()*.4) {
    $(".txt").fadeIn(1000);
    $(".imp-btn-2").fadeIn(1000);
      // $(".txt").hide();
    }
});