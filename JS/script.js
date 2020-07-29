
var chosenWord = ["jquery", "binary", "bitmap",]
var wordChoice = chosenWord[Math.floor(Math.random() * chosenWord.length)];

let answer = '';
let lives = 6;
let guessed = [];
let wordStatus = null;


document.addEventListener('click', handleGuess);

function updateImage() {
  if (lives == 5) {
    document.getElementById('hangman').src = "image1.jpg"
  } else if (lives == 4) {
    document.getElementById('hangman').src = "image2.jpg"
  }
  else if (lives == 3) {
    document.getElementById('hangman').src = "image3.jpg"
  }
  else if (lives == 2) {
    document.getElementById('hangman').src = "image4.jpg"
  }
  else if (lives == 1) {
    document.getElementById('hangman').src = "image5.jpg"
  }
  else if (lives == 0) {
    document.getElementById('hangman').src = "image6.jpg"
  }
}

function handleGuess(event) {
  if (event.target.id == 'a') {
    document.getElementById('a').style.backgroundColor = '#A0522D'

    if (wordChoice.includes("a")) {
      var wordPosition = wordChoice.indexOf("a") + "";
      document.getElementById(wordPosition).innerHTML = "a";
    } else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'b') {
    document.getElementById('b').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("b")) {
      var wordPosition = wordChoice.indexOf("b") + "";
      document.getElementById(wordPosition).innerHTML = "b";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'c') {
    document.getElementById('c').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("c")) {
      var wordPosition = wordChoice.indexOf("c") + "";
      document.getElementById(wordPosition).innerHTML = "c";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'd') {
    document.getElementById('d').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("d")) {
      var wordPosition = wordChoice.indexOf("d") + "";
      document.getElementById(wordPosition).innerHTML = "d";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'e') {
    document.getElementById('e').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("e")) {
      var wordPosition = wordChoice.indexOf("e") + "";
      document.getElementById(wordPosition).innerHTML = "e";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'f') {
    document.getElementById('f').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("f")) {
      var wordPosition = wordChoice.indexOf("f") + "";
      document.getElementById(wordPosition).innerHTML = "f";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'g') {
    document.getElementById('g').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("g")) {

      var wordPosition = wordChoice.indexOf("g") + "";
      document.getElementById(wordPosition).innerHTML = "g";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'h') {
    document.getElementById('h').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("h")) {

      var wordPosition = wordChoice.indexOf("h") + "";
      document.getElementById(wordPosition).innerHTML = "h";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'i') {
    document.getElementById('i').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("i")) {

      var wordPosition = wordChoice.indexOf("i") + "";
      document.getElementById(wordPosition).innerHTML = "i";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'j') {
    document.getElementById('j').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("j")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("j") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(wordPosition).innerHTML = "j";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'k') {
    document.getElementById('k').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("k")) {

      var wordPosition = wordChoice.indexOf("k") + "";
      document.getElementById(wordPosition).innerHTML = "k";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'l') {
    document.getElementById('l').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("l")) {

      var wordPosition = wordChoice.indexOf("l") + "";
      document.getElementById(wordPosition).innerHTML = "l";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'm') {
    document.getElementById('m').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("m")) {
      var wordPosition = wordChoice.indexOf("m") + "";
      document.getElementById(wordPosition).innerHTML = "m";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'n') {
    document.getElementById('n').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("n")) {
      var wordPosition = wordChoice.indexOf("n") + "";
      document.getElementById(wordPosition).innerHTML = "n";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'o') {
    document.getElementById('o').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("o")) {
      var wordPosition = wordChoice.indexOf("o") + "";
      document.getElementById(wordPosition).innerHTML = "o";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'p') {
    document.getElementById('p').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("p")) {

      var n = wordChoice.indexOf("p") + "";
      document.getElementById(n).innerHTML = "p";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'q') {
    document.getElementById('q').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("q")) {

      var wordPosition = wordChoice.indexOf("q") + "";
      document.getElementById(wordPosition).innerHTML = "q";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'r') {
    document.getElementById('r').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("r")) {

      var wordPosition = wordChoice.indexOf("r") + "";
      document.getElementById(wordPosition).innerHTML = "r";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 's') {
    document.getElementById('s').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("s")) {

      var wordPosition = wordChoice.indexOf("s") + "";
      document.getElementById(wordPosition).innerHTML = "s";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 't') {
    document.getElementById('t').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("t")) {

      var wordPosition = wordChoice.indexOf("t") + "";
      document.getElementById(wordPosition).innerHTML = "t";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'u') {
    document.getElementById('u').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("u")) {

      var wordPosition = wordChoice.indexOf("u") + "";
      document.getElementById(wordPosition).innerHTML = "u";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'v') {
    document.getElementById('v').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("v")) {

      var wordPosition = wordChoice.indexOf("v") + "";
      document.getElementById(wordPosition).innerHTML = "v";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'w') {
    document.getElementById('w').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("w")) {

      var wordPosition = wordChoice.indexOf("w") + "";
      document.getElementById(wordPosition).innerHTML = "w";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'x') {
    document.getElementById('x').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("x")) {

      var wordPosition = wordChoice.indexOf("x") + "";
      document.getElementById(wordPosition).innerHTML = "x";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'y') {
    document.getElementById('y').style.backgroundColor = '#8B4513'
    if (wordChoice.includes("y")) {

      var wordPosition = wordChoice.indexOf("y") + "";
      document.getElementById(wordPosition).innerHTML = "y";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  else if (event.target.id == 'z') {
    document.getElementById('z').style.backgroundColor = '#A0522D'
    if (wordChoice.includes("z")) {

      var wordPosition = wordChoice.indexOf("z") + "";
      document.getElementById(wordPosition).innerHTML = "z";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  checkWinningCondition();
  checkLosingCondition()
}

function checkWinningCondition() {
  if (document.getElementById("0").innerHTML != "_" && document.getElementById("1").innerHTML != "_"
    && document.getElementById("2").innerHTML != "_" && document.getElementById("3").innerHTML != "_"
    && document.getElementById("4").innerHTML != "_" && document.getElementById("5").innerHTML != "_") {
    document.getElementById("hidden").innerHTML = "You saved Tuco!"
  }
}

function checkLosingCondition() {
  if (lives == 0) {
    document.getElementById("hidden1").innerHTML = "You let Tuco die!"
  }
}




function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}


var restart_game = document.getElementById('reset');
restart_game.addEventListener('click', newGame);
function newGame() {
  window.location.reload()
}