function showMessage() {
  window.alert("find a different site to search bimbo");
}

var droppedDown = false;

function dropDown() {
  if(droppedDown == false) {
        $('.dropDown-info').stop();
          curHeight =  $('.dropDown-info').height();
          autoHeight = $(window).height(); - $('.header').height();
        $('.dropDown-info').height(curHeight).animate({height: autoHeight}, 750);
        $('body').addClass("unscroll");
        $('.dropDown-info').show();
        $('.dropdown-content').css("display", "block");
        droppedDown = true;
    } else {
      $('.dropDown-info').stop();
      curHeight = $('.dropDown-info').height();
      autoHeight = '0px';
      $('.dropDown-info').height(curHeight).animate({height: autoHeight}, 750);
      $('body').removeClass("unscroll");
      setTimeout(function(){
      $('.dropdown-content').css("display", "none");
    }, 750);
      droppedDown = false;
    }
}
