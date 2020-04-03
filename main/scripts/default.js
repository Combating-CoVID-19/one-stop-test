function showMessage() {
  window.alert("find a different site to search ");
}

var droppedDown = false;

function dropDown() {
  if(droppedDown == false) {
        $('.dropdown-navbar').stop();
          curHeight =  $('.dropdown-navbar').height();
          autoHeight = $(window).height(); - $('.header').height();
        $('.dropdown-navbar').height(curHeight).animate({height: autoHeight}, 750);
        $('body').addClass("unscroll");
        $('.dropdown-navbar').show();
        $('.dropdown-content').css("display", "block");
        $('.header').addClass('dropdown');
        droppedDown = true;
    } else {
      $('.dropdown-navbar').stop();
      curHeight = $('.dropdown-navbar').height();
      autoHeight = '0px';
      $('.dropdown-navbar').height(curHeight).animate({height: autoHeight}, 750);
      $('body').removeClass("unscroll");
      setTimeout(function(){
      $('.dropdown-content').css("display", "none");
    }, 750);
      droppedDown = false;
      $('.header').removeClass("dropdown")

    }
}
