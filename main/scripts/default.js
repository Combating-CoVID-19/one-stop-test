function showMessage() {
  window.alert("we dont want to talk to you. ");
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
