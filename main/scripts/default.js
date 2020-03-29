function showMessage() {
  window.alert("we dont want to talk to you. ");
}

var droppedDown = false;

function dropDown() {
  var el = $('.header');
  if(droppedDown == false) {
          curHeight = "48px";
          autoHeight = '100vh';
        $('.header').height(curHeight).animate({height: autoHeight}, 1000);
        droppedDown = true;
    } else {
      curHeight = "100vh";
      autoHeight = '48px';
    $('.header').height(curHeight).animate({height: autoHeight}, 1000);
    droppedDown = false;
    }
}
