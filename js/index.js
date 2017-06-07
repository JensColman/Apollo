function main() {
    $(document).ready(function() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            //$(this).toggleClass("hamburger");
            $("#wrapper").toggleClass("menuDisplayed");
        });
    });

    if (window.location.href.match('dashboard.html') !== null) {
        //Vak toevoegen in dashboard.html
        function vakToevoegen() {
            var vakkenLijst = document.getElementById("vakKiezen");
            var strUser = vakkenLijst.options[vakkenLijst.selectedIndex].value;
            console.log(strUser);

            $(".lessen").append('<div class="les">' + strUser + '<a class="insideLes" href="#">Vragenlijst</a><a class="insideLes" href="#">Toets</a><a class="insideLes" href="#">...</a></div>');
        }

  /*$(".nieuwVraagGebied").click(function(){
    $(".vraagGebied").append('<div class="content-vraag-stelling nieuweVraag nieuweVraag2"></div>');
    $(".nieuweVraag2").append('<h4 class="content-vraag-titel">Maak een nieuwe vraag</h4>');
  });*/

    if (window.location.href.match('toetsMaken.html') != null) {
      $(".nieuweVraag1").click(function(){
          $(".vs1").append('<h2 class="content-vraag-titel"><form><input placeholder="Stel een vraag" type="text" value="" style="margin-bottom: 10px; width: 100%; padding: 5px;"></form></h2><div class="streep"></div><form class="formAntwoord"><textarea placeholder="Antwoord van student" style="width: 100%; height: 100px; padding: 5px;"></textarea></form>');
      });
        var vakToevoegenButton = document.getElementById("vaktoevoegen");
        vakToevoegenButton.addEventListener('click', vakToevoegen, false);
    }

      $(".nieuweVraag2").click(function(){
          $(".vs2").append('<h2 class="content-vraag-titel"><form><input placeholder="Stel een vraag" type="text" value="" style="margin-bottom: 10px; width: 100%; padding: 5px;"></form></h2><div class="streep"></div><form class="formAntwoord"><textarea placeholder="Antwoord van student" style="width: 100%; height: 100px; padding: 5px;"></textarea></form>');
      });
    }

    /*$(".nieuwVraagGebied").click(function(){
      $(".vraagGebied").append('<div class="content-vraag-stelling nieuweVraag nieuweVraag2"></div>');
      $(".nieuweVraag2").append('<h4 class="content-vraag-titel">Maak een nieuwe vraag</h4>');
    });*/

    $(".nieuweVraag1").click(function() {
        $(".vs1").append('<h2 class="content-vraag-titel"><form><input placeholder="Stel een vraag" type="text" value="" style="margin-bottom: 10px; width: 100%; padding: 5px;"></form></h2><div class="streep"></div><form class="formAntwoord"><textarea placeholder="Antwoord van student" style="width: 100%; height: 100px; padding: 5px;"></textarea></form>');
    });

    $(".nieuweVraag2").click(function() {
        $(".vs2").append('<h2 class="content-vraag-titel"><form><input placeholder="Stel een vraag" type="text" value="" style="margin-bottom: 10px; width: 100%; padding: 5px;"></form></h2><div class="streep"></div><form class="formAntwoord"><textarea placeholder="Antwoord van student" style="width: 100%; height: 100px; padding: 5px;"></textarea></form>');
    });

    if (window.location.href.match('vragenlijst.html') !== null) {
        //Nieuwe vraag stellen in vragenlijst.html

        function vraagStellen() {
            var nieuweVraag = document.getElementById("nieuweVraag");
            nieuweVraag.className = 'content-vraag-sectie vs5';
        }

        var toevoegenVraag = document.getElementById("vraagToevoegen");
        toevoegenVraag.addEventListener('click', vraagStellen, false);

        // checkbox van vragenlijst

        $('.vraagImpl').click(function () {
              if ($(this).find(".checkBox").is(':checked')) {
                  $(this).find('#aToets').show();
              } else {
                  $(this).find('#aToets').hide();
              }
         });

          //upvote systeem
          var rating = document.getElementsByClassName("rating");
          var i = 0;

          for (i = 0; i < rating.length; i++) {
               rating[i].addEventListener("click", function() {
                   this.innerHTML += 0;
                   return false;
              });
         }
    }


    /*// Om .les dezelfde hoogte als breedte te geven
    var cw = $('.les').width();
    $('.les').css({'height':cw+'px'});*/



<<<<<<< HEAD
    if (window.location.href.match('vraag.html') === null) {
=======
    if (window.location.href.match('vraag.html') !== null) {
>>>>>>> master
        //Quill.js implementatie in vraag.html
        var editor = document.getElementById("editor");
        var quill = new Quill('#editor', {
            theme: 'snow', // Specify theme in configuration
            modules: {
                toolbar: [ // custom dropdown
                    [{
                        'header': [1, 2, 3, 4, 5, 6, false]
                    }],
                    ['bold', 'italic'],
                    ['link', 'blockquote', 'image'],
                    [{
                        list: 'ordered'
                    }, {
                        list: 'bullet'
                    }]
                ]
            }
        });
        quill.setText('Schrijf een antwoord...');

        //Toggle functionaliteit voor Reacties en Beantwoorden knoppen in vraag.html
        var reactiesButton = document.getElementById("vraag-reactie"),
            reactiesBeantwoord = document.getElementById("vraag-beantwoord"),
            antwoorden = document.getElementById("sectie-antwoorden"),
            beantwoorden = document.getElementById("sectie-beantwoorden");

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
        reactiesBeantwoord.addEventListener('click', toggleToolbar, false);
    }

<<<<<<< HEAD




=======
    if (window.location.href.match('vragenlijst.html') !== null) {
        //upvote systeem
      var rating = document.getElementsByClassName("rating");

      for (i = 0; i < rating.length; i++) {
           rating[i].addEventListener("click", function() {
                console.log("Het aantal likes: " + this.getAttribute("data-likes"));
                var dataAttribuut = this.getAttribute("data-likes");
                var aantalLikes = Number(dataAttribuut);
                if(this.className === "rating voted") {
                  var dislike = aantalLikes - 1;
                  this.setAttribute("data-likes", dislike);
                  console.log("Je trekt je stem terug in, het aantal nieuwe likes: " + this.getAttribute("data-likes"));
                  this.className="rating";
                  this.innerHTML = "<img src=\"./images/apollo_icon_1.png\" width=\"25\">" + " +" + dislike;
                } else {
                  var nieuwAantalLikes = aantalLikes + 1;
                  this.setAttribute("data-likes", nieuwAantalLikes);
                  console.log("Het aantal nieuwe likes: " + this.getAttribute("data-likes"));
                  this.className="rating voted"
                  this.innerHTML = "<img src=\"./images/apollo_icon_2.png\" width=\"25\">" + " +" + nieuwAantalLikes;
                }
          });
      }
>>>>>>> master

    }





}


window.onload = function() {
    main();
};
