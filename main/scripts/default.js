function showMessage() {
  window.alert("we dont want to talk to you. ");
}

function dropDown() {
  var el = $('.header');
          curHeight = "48px";
          autoHeight = '100%';

      $('.header').height(curHeight).animate({height: autoHeight}, 1000);
      // el.height(curHeight).animate({height: autoHeight}, 1000);
}
