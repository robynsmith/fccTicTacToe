var playerTurn = "x";

$(document).ready(function() {
  $(".box-content").click(function() {
    var buttonContent = $(this).attr("value");

    console.log($(this).text().length);

    if ( $(this).text().length > 0 ) {
      //do nothing
      return 0;
    } 
    else if (playerTurn === "x") {
      $(this).html("x");
      playerTurn = "o";
    } else if (playerTurn === "o") {
      $(this).html("o");
      playerTurn = "x";
    }
  });
});