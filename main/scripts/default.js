function showMessage() {
  window.alert("we dont want to talk to you. ");
}

var droppedDown = false;

function dropDown() {
  var el = $('.header');
  if(droppedDown == false) {
        $('.dropDown-info').stop();
          curHeight =  $('.dropDown-info').height();
          autoHeight = $(window).height(); - $('.header').height();
        $('.dropDown-info').height(curHeight).animate({height: autoHeight}, 750);
        $('body').addClass("unscroll");
        droppedDown = true;
    } else {
      $('.dropDown-info').stop();
      curHeight = $('.dropDown-info').height();
      autoHeight = '0px';
      $('.dropDown-info').height(curHeight).animate({height: autoHeight}, 750);
      $('body').removeClass("unscroll");
      droppedDown = false;
    }
}
