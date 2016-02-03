var userPoint = 0;
var faceUp = [];
var assignments = 1;
var divIds = [];
var matches = 0;

function fillBoard() {
  //TODO: randomly assign positions to the tiles on the screen call
  // addTileToBoard here
  // Hint: You can use a forEach or a for loop
  /*var rows = [];
  for(var row=0;row<2;row++){
    rows[row]=['rock','paper','scissors'];
    shuffle(rows);
    console.log(rows);
    for(i=0;i<rows.length;i++){
      console.log(rows[i]);
      addTileToBoard(rows[i]);
    }
  }*/
  var tiles = ['rock','paper','scissors'];
  var doubles = [];
  for(i=0;i<tiles.length;i++){
    doubles.push(tiles[i]);
    doubles.push(tiles[i]);
  }
  var shuffled = shuffle(doubles);
  console.log(shuffled);

  
}
function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = [];
  var length = array.length;

  for(i = 0; i < length; i++) {
    var arrLen = array.length;
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick];
    console.log(element);
    newArray.push(element);
    array.splice(array.indexOf(element), 1);
    arrLen --;
    addTileToBoard(element);
  }

  return newArray;
};

function addTileToBoard(element) {
  //TODO: randomly assign ids to the divs
  var div =  "<div id=\"" + assignments +"\" class=\""+ element + " token hidden\"></div>";
  $(".game").append(div);
  assignments ++
};

function clearBoard() {
  $(".game").empty();
};

function checkTilesMatch(array) {
  //TODO: check to see if the value of the 2 face up tile match

};

function setPoint() {
    $('#userPoint').text(userPoint);
};

function evaluate( evt ) {
    var tileType = evt.target.getAttribute('class');
    var divID = evt.target.getAttribute("id");
    var name = evt.target;
    var preivous = name;
    console.log(name);
    //TODO: If this is first tile clicked store the card if it is the second tile
    // clicked check to see if it is the same as the first.
    faceUp.push(tileType);
    console.log(faceUp);
    if(faceUp.length == 2 && faceUp[0] === faceUp[1]){
      console.log("good");
      faceUp = [];
    } else if (faceUp.length == 2 && faceUp[0] !== faceUp[1]){
      console.log("bad");
      $(name).addClass("hidden");
      faceUp = [];
    }
};


$(document).ready(function() {
  function bop(elm) {
      $(elm).fadeOut('fast').delay(1).fadeIn('fast');
  };


  fillBoard();

  $('.token').click( function(e) {
      var element = e.toElement.classList[0]
      var id = e.toElement.getAttribute("id")
      $(this).removeClass("hidden");
      bop(this);
      evaluate(e);
  });


});
