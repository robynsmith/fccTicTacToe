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

var indexName = {0:"top-left",
  1:"top-middle",
  2:"top-right",
  3:"middle-left",
  4:"middle-middle",
  5:"middle-right",
  6:"bottom-left",
  7:"bottom-middle",
  8:"bottom-right"}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  $(".box-content").click(function() {
    var buttonContent = $(this).attr("value");

    console.log($(this).text().length);

    if ( $(this).text().length > 0 ) {
      //do nothing
      return 0;
    } 
    
    
   $(this).html("x");
    board[nameIndex[buttonContent]] = "x";
    console.log(board);
    playerTurn = "o";
    console.log("computerTurn()");
    //TODO: create AI that pics spot randomly
    //TODO: Win condition

    play = getRandomInt(0,8);
    console.log("play:"+play);
    while (typeof board[play] !== 'undefined') {
      play = getRandomInt(0, 8);
      console.log("play:"+play);
    }
    $().html("o");
    board[play] = "o";
    console.log(board);
  });
});