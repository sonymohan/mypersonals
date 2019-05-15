$(document).ready(function(){
  $('button').hover(function(){ //hover
    $('img').hide(2000);},
      function () {  //when hover been removed
        $('img').show(2000);
      }
  );
});