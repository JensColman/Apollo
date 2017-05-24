function main() {
  $(document).ready(function() {
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          //$(this).toggleClass("hamburger");
          $("#wrapper").toggleClass("menuDisplayed");
      });
  });

  /*// Om .les dezelfde hoogte als breedte te geven
  var cw = $('.les').width();
  $('.les').css({'height':cw+'px'});*/

  /*var editor = document.getElementById("editor");
  var quill = new Quill('#editor', {
        theme: 'snow',   // Specify theme in configuration
        modules: {
            toolbar: [
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['bold', 'italic'],
                ['link', 'blockquote', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }]
            ]
        }
  });
  quill.setText('Schrijf een antwoord...');*/

}


window.onload = function() {
  main();
};
