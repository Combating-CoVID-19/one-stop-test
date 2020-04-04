window.onload = (event) => {
      $("#a1").animate({opacity: 1}, 500);
      setTimeout(function(){
      $("#a2").animate({opacity: 1}, 500);
    }, 750);
      setTimeout(function(){
      $("#a3").animate({opacity: 1}, 750);
    }, 1500);
    setTimeout(function(){
    $(".list-header").animate({opacity: 1}, 750);
  }, 3000);
  setTimeout(function(){
  $(".sbbtl-").animate({opacity: 1}, 750);
}, 2500);
}

var isOpen = false;
function w3_action() {
    if(!isOpen) {
    $("#main").animate({'margin-left': '25%'}, 500);
    // $("#main").animate({'width': '75%'}, 500);
    // $(".header").animate({'margin-left': '25%'}, 500);

        $("#openNav").addClass('txt-r-align');

    $("#mySidebar").animate({width: '25%'}, 500);

    $("#openNav").animate({'width': '25%'}, 500);
    $('.logo').addClass('extend');
    isOpen = true;
  } else {
    $("#main").animate({'margin-left': '5%'}, 500);
    // $("#main").animate({'width': '95%'}, 500);
    // $(".header").animate({'margin-left': '0%'}, 500);

    $("#openNav").removeClass('txt-r-align');


    $("#mySidebar").animate({width: '5%'}, 500);
    $("#openNav").animate({'width': '5%'}, 500);
    $('.logo').removeClass('extend');
    isOpen = false;
  }
}
