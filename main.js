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

// Checks

function movesLeft() {
  var movesLeftFlag = false;

  for (var i = 0; i < 9; i++) {
    if (typeof board[i] === 'undefined') {
      movesLeftFlag = true;
      break;
    }
  }

  return movesLeftFlag;
}

/*
Win conditions:

Down:

Left: 0,3, 6 same
Middle: 1, 4, 7 same
Right: 2, 5, 8 same

Across:

Top: 0, 1, 2
Middle: 3, 4, 5
Bottom: 6, 7, 8

Diagonally:

top-left-to-right-bottom: 0, 4, 8
bommtom-left-to-right-top: 6, 4, 2

*/
function winCheck() {
  //Down-left
  if (board[0] === board[3] && board[0] === board[6]) {
    if (typeof board[0] !== "undefined") {
      return board[0];
    }
  }
  //Down-middle
  if (board[1] === board[4] && board[1] === board[7]) {
    if (typeof board[1] !== "undefined") {
      return board[1];
    }
  }
  //Down-right
  if (board[2] === board[5] && board[2] === board[8]) {
    if (typeof board[2] !== "undefined") {
      return board[2];
    }
  }
  //Accross-top
  if (board[0] === board[1] && board[0] === board[2]) {
    if (typeof board[0] !== "undefined") {
      return board[0];
    }
  }
  //Accross-middle
  if (board[3] === board[4] && board[3] === board[5]) {
    if (typeof board[3] !== "undefined") {
      return board[3];
    }
  }
  //accross-bottom
  if (board[6] === board[7] && board[6] === board[8]) {
    if (typeof board[6] !== "undefined") {
      return board[6];
    }
  }
  //diagonally left-to-right down
  if (board[0] === board[4] && board[0] === board[8]) {
    if (typeof board[0] !== "undefined") {
        return board[0];
    }
  }
  //Diagonally left-to-right up
  if (board[6] === board[4] && board[6] === board[2]) {
    if (typeof board[6] !== "undefined") {
        return board[6];
    }
  }

  return 0;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  $(".box-content").click(function() {
    var buttonContent = $(this).attr("value");

    console.log($(this).text().length);

    if ( $(this).text().length > 0 || movesLeft() === false || winCheck() !== 0) {
      //do nothing
      return 0;
    } 
    
    
    $(this).html("x");
    board[nameIndex[buttonContent]] = "x";
    console.log(board);
    if (movesLeft() === false) {
      return 0;
    }

    if (winCheck() === "x") {
      console.log("X Wins!");
    } else if (winCheck() === "o") {
      console.log("O Wins!");
    }

    console.log("computerTurn()");
    //TODO: create AI that pics spot randomly
    //TODO: Win condition

    play = getRandomInt(0,8);
    console.log("play:"+play);
    while (typeof board[play] !== 'undefined') {
      play = getRandomInt(0, 8);
      console.log("play:"+play);
    }
    console.log(indexName[play]);
    $("."+indexName[play]).html("o");
    board[play] = "o";
    console.log(board);

    if (winCheck() === "x") {
      console.log("X Wins!");
    } else if (winCheck() === "o") {
      console.log("O Wins!");
    }

  });
});