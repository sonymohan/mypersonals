$(document).ready(function(){
  $('button').click(function(){
    //$('.box:first').append("<h3> This is a jQuery Text <h3>");
    //$('.box:first').prepend("<h3> This is a jQuery Text <h3>");
    //$('.box:first').after("<h3> This is a jQuery Text <h3>");
    $('.box').before("<h3> This is a jQuery Text <h3>");
  });
});