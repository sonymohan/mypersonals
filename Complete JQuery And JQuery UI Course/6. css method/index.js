$(document).ready(function(){
  $('button').click(function(){
//    $('.box:first').css("property", "property_value"); --> defination for single property
//    $('.box:first').css({"property":"property_value", "property":"property_value"}); --> defination for multiple property
  
  //   $('.box:first').css("color","orange");
     $('.box:first').css({"color":"orange", "border":"2px solid orange"});
  });
});