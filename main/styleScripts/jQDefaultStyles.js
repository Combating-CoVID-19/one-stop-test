$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
            $(".header").addClass("active");

        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");

        }



    });

});

window.onload = function(){
  if($( window ).width() < 767) {
    $(".bogo").attr("src", "/main/photos/Pandemicalm/g3667.png");
  }
}
