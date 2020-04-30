
// Have automatically change on different widths



var isOpen = false;

function showMenu() {

  var widtha = $('#dropdownMenuButton').width();

  if(isOpen) {
    $('.block-o').stop();
    curWidth =  $('.block-o').width();
    $('.block-o').width(curWidth).animate({width:'100%'}, 750);
    // $('.dropdown-menu').hide();
    isOpen = false;
  } else {
    $('.block-o').stop();
    curWidth =  $('.block-o').width();
    $('.block-o').width(curWidth).animate({width: '64px'}, 750);
    isOpen = true;
  }
}

function changeNewsBuffer(){
  changeTheme()
  changeNews()
}

function changeNews(){
  if(currentTheme == "dark"){
    $("#light-mode-news").css('display', 'none')
    $("#dark-mode-news").css('display', 'inline')
} else {
  $("#light-mode-news").css('display', 'inline')
  $("#dark-mode-news").css('display', 'none')
}
}

changeNews()