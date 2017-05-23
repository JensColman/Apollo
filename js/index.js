function main() {
  $(document).ready(function() {
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $(this).toggleClass("hamburger");
          $("#wrapper").toggleClass("menuDisplayed");
      });
  });

  /*// Om .les dezelfde hoogte als breedte te geven
  var cw = $('.les').width();
  $('.les').css({'height':cw+'px'});*/

  
}



window.onload = function() {
  main();
}
