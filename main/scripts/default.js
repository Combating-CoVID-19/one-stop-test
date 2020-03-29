function showMessage() {
  window.alert("we dont want to talk to you. ");
}

var droppedDown = false;

function dropDown() {
  var el = $('.header');
  if(droppedDown == false) {
        $('.header').stop();
          curHeight =  $('.header').height();
          autoHeight = '100vh';
        $('.header').height(curHeight).animate({height: autoHeight}, 750);
        droppedDown = true;
    } else {
      $('.header').stop();
      curHeight = $('.header').height();
      autoHeight = '48px';
      $('.header').height(curHeight).animate({height: autoHeight}, 750);
      droppedDown = false;
    }
}
