$(document).ready(function(){
  $(window).scroll(function () {
    if($(document).scrollTop() > 150){
      $('.box').addClass('show');
    }
  });
});