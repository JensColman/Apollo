function main() {
    $(document).ready(function() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            //$(this).toggleClass("hamburger");
            $("#wrapper").toggleClass("menuDisplayed");
        });
    });


    //Vak toevoegen in vragenlijst.html
    var vakToevoegenButton = document.getElementById("vaktoevoegen");

    function vakToevoegen() {
        var vakkenLijst = document.getElementById("vakKiezen");
        var strUser = vakkenLijst.options[vakkenLijst.selectedIndex].value;
        console.log(strUser);

        $(".lessen").append('<div class="les">' + strUser + '<a class="insideLes" href="#">Vragenlijst</a><a class="insideLes" href="#">Toets</a><a class="insideLes" href="#">...</a></div>');
    }

    vakToevoegenButton.addEventListener('click', vakToevoegen, false);

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

    //Nieuwe vraag stellen in vragenlijst.html

    function vraagStellen() {
        var nieuweVraag = document.getElementById("nieuweVraag");
        nieuweVraag.className = 'content-vraag-sectie vs5';
    }

    var toevoegenVraag = document.getElementById("vraagtoevoegen");
    toevoegenVraag.addEventListener('click', vraagStellen, false);






    // upvote in vragenlijst

    /*var upKnop = document.getElementById("upvote");

    function upvote() {
         this.innerHTML = 26;
    }*/

    /*var upKnop = document.getElementById("upvote");
    upKnop.addEventListener("click", upvote());

    function upvote() {
         upKnop.innerHTML = "26";
         console.log("geklikt");
    }*/

    /*document.getElementById("upvote").onclick = function() {
         this.innerHTML = "dsfd";
    };*/

    /*function upvote() {
         document.getElementById("upvote").innerHTML = "dsf";
    }*/








    /*// Om .les dezelfde hoogte als breedte te geven
    var cw = $('.les').width();
    $('.les').css({'height':cw+'px'});*/


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


window.onload = function() {
    main();
};
