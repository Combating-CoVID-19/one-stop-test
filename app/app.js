import React, {Component} from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6"> </div>
            <div className="col s12 m5 offset-m1"> </div>
         </div>
      </div>
    )

  }
}

function dropDown() {
  if(droppedDown == false) {
        $('.dropdown-info').stop();
          curHeight =  $('.dropdown-info').height();
          autoHeight = $(window).height(); - $('.header').height();
        $('.dropdown-info').height(curHeight).animate({height: autoHeight}, 750);
        $('body').addClass("unscroll");
        $('.dropdown-info').show();
        $('.dropdown-content').css("display", "block");
        $('.header').addClass('dropdown');
        droppedDown = true;
    } else {
      $('.dropdown-info').stop();
      curHeight = $('.dropdown-info').height();
      autoHeight = '0px';
      $('.dropdown-info').height(curHeight).animate({height: autoHeight}, 750);
      $('body').removeClass("unscroll");
      setTimeout(function(){
      $('.dropdown-content').css("display", "none");
    }, 750);
      droppedDown = false;
      $('.header').removeClass("dropdown")

    }
}
