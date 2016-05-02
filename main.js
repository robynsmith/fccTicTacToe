var playerTurn = "x";

$(document).ready(function() {
  $(".box-content").click(function() {
    var buttonContent = $(this).attr("value");

    console.log($(this).text().length);

    if ( $(this).text().lenght === 0 ) {
      //do nothing
    } 
    else if (playerTurn === "x") {
      $(this).html("x");
      playerTurn = "o";
    } else if (playerTurn === "o") {
      $(this).html("x");
      playerTurn = "x";
    }
  });
});