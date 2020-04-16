
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

window.onload = function() {

var width = $(window).width();

if(width < 767) {
  console.log("ok boomer");
  $('#dropdownMenuButton2').html("CAT");
}
}
