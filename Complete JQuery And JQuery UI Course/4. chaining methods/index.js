$(document).ready(function(){
  $('button').click(function(){
    // $('.box:first').css("color", "orange");
    // $('.box:first').css("border", "2px solid orange");
    // $('.box:first').hide(2000);
    // the above example is creating in 3 diffrent lines but below is example of chaining method:
    
    $('.box:first').css("color", "orange").css("border", "2px solid orange").hide(2000);
  });
});