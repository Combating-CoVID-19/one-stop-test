window.onload = (event) => {
      $("#a1").animate({opacity: 1}, 500);
      setTimeout(function(){
      $("#a2").animate({opacity: 1}, 500);
    }, 750);
      setTimeout(function(){
      $("#a3").animate({opacity: 1}, 750);
    }, 1500);
    setTimeout(function(){
    $(".list-header").animate({opacity: 1}, 750);
  }, 3000);
  setTimeout(function(){
  $(".sbbtl-").animate({opacity: 1}, 750);
}, 2500);
}


function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("main").style.width = "75%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
