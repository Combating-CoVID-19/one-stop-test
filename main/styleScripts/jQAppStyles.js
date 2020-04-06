window.onload = (event) => {
      $("#a1").animate({opacity: 1}, 250);
      setTimeout(function(){
      $("#a2").animate({opacity: 1}, 250);
    }, 750);
      setTimeout(function(){
      $("#a3").animate({opacity: 1}, 750);
    }, 1250);
    setTimeout(function(){
    $(".list-header").animate({opacity: 1}, 750);
  }, 3000);
  setTimeout(function(){
  $(".sbbtl-").animate({opacity: 1}, 750);
}, 2250);
}

var isOpen = false;
function w3_action() {

    if(!isOpen) {
    // $("#main").animate({'width': '75%'}, 250);
    var ml = $(window).width()/4 - $('.bogo').width()/2 - 20;
        $(".logo").animate({'margin-right': '50%'}, 250);
        $(".logo").animate({'margin-left': ml}, 250);
    $(".header").animate({'margin-left': '25%'}, 250);

        $("#openNav").addClass('txt-r-align');

    $("#mySidebar").animate({width: '25%'}, 250);

    $("#openNav").animate({'width': '25%'}, 250);
    isOpen = true;
  } else {
      $(".logo").animate({'margin-right': '0%'}, 250);
    // $("#main").animate({'width': '95%'}, 250);
    $(".logo").animate({'padding-left': '12px'}, 250);
    $(".logo").animate({'margin-left': '0px'}, 250);
    $(".header").animate({'margin-left': '5%'}, 250);
    // $(".logo").animate({'margin-left': 0}, 250);
    setTimeout(function(){
    $("#openNav").removeClass('txt-r-align');
  }, 400);



    $("#mySidebar").animate({width: '5%'}, 250);
    $("#openNav").animate({'width': '5%'}, 250);
    // $('.logo').removeClass('extend');
    isOpen = false;
  }



}
