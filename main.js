var playerTurn = "x";
var board = [];
var nameIndex = {"top-left":0,
  "top-middle":1,
  "top-right":2,
  "middle-left":3,
  "middle-middle":4,
  "middle-right":5,
  "bottom-left":6,
  "bottom-middle":7,
  "bottom-right":8}

function computerTurn() {
  console.log("computerTurn()");
}

$(document).ready(function() {
  $(".box-content").click(function() {
    var buttonContent = $(this).attr("value");

    console.log($(this).text().length);

    if ( $(this).text().length > 0 ) {
      //do nothing
      return 0;
    } 
    
    if (playerTurn === "x") {
      $(this).html("x");
      playerTurn = "o";
      computerTurn();
    }
  });
});