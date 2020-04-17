
// Have automatically change on different widths



var isOpen = false;

function showMenu() {

  var widtha = $('#dropdownMenuButton').width();

  if(isOpen) {
    $('.dropdown-menu').hide();
    isOpen = false;
  } else {
    $('.dropdown-menu').show();
    isOpen = true;
  }
}
