
// Have automatically change on different widths



var isOpen = false;

function showMenu() {

  var widtha = $('#dropdownMenuButton').width();

  if(isOpen) {
    curWidth =  $('.block-o').width();
    $('.block-o').width(curWidth).animate({width:'100%'}, 750);
    // $('.dropdown-menu').hide();
    isOpen = false;
  } else {
    curWidth =  $('.block-o').width();
    $('.block-o').width(curWidth).animate({width: '64px'}, 750);
    isOpen = true;
  }
}
