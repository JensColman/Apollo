$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("hamburger");
        $("#wrapper").toggleClass("menuDisplayed");
    });
});
