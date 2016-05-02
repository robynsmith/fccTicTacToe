var playerTurn = "x";

$(document).ready(function() {
  $(".box-content").click(function() {
    var buttonContent = $(this).attr("value");
    console.log(buttonContent);

    if (playerTurn === "x") {
      $(this).html("x");
      playerTurn = "o";

    } else if (playerTurn === "o") {
      $(this).html("o");
      playerTurn = "x";
    }

  });
});