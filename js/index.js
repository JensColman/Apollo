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


  //Quill.js implementatie in vraag.html
  var editor = document.getElementById("editor");
  var quill = new Quill('#editor', {
        theme: 'snow',   // Specify theme in configuration
        modules: {
            toolbar: [  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic'],
                ['link', 'blockquote', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }]
            ]
        }
  });
  quill.setText('Schrijf een antwoord...');


  //Toggle functionaliteit voor Reacties en Beantwoorden knoppen in vraag.html
  var reactiesButton = document.getElementById("vraag-reactie"), reactiesBeantwoord = document.getElementById("vraag-beantwoord"), antwoorden = document.getElementById("sectie-antwoorden"), beantwoorden = document.getElementById("sectie-beantwoorden");

  function toggleAntwoorden() {
      if (antwoorden.className === "content-vraag-sectie antwoorden onzichtbaar") {
          antwoorden.className = "content-vraag-sectie antwoorden";
          beantwoorden.className = "tool-wrapper onzichtbaar";
      } else {
          antwoorden.className = "content-vraag-sectie antwoorden onzichtbaar";
      }
  }

  function toggleToolbar() {

      if (beantwoorden.className === "tool-wrapper onzichtbaar") {
          beantwoorden.className = "tool-wrapper";
      } else {
          beantwoorden.className = "tool-wrapper onzichtbaar";
      }
  }

  reactiesBeantwoord.addEventListener('click', toggleToolbar, false)

}


window.onload = function() {
  main();
};
