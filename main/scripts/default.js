function showMessage() {
  window.alert("find a different site to search ");
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
        $('.header').addClass('dropdown');
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
      $('.header').removeClass("dropdown")
    }
}
