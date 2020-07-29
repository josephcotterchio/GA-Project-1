var chosenWord = ["jquery", "binary",]
var wordChoice = chosenWord[Math.floor(Math.random() * chosenWord.length)];

let answer = '';
let lives = 6;
let guessed = [];
let wordStatus = null;


document.addEventListener('click', handleGuess);

// images = document.querySelectorAll('.grid-tile-container');
// function showHangmanImage (index) { images[index].classList.remove('hidden')
// }
// function randomWord() {
//   answers = answers[Math.floor(Math.random() * answers.length)];
// }
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
  //let wordChoice = chosenWord[0]
  if (event.target.id == 'a') {
    document.getElementById('a').style.backgroundColor = '#A0522D'

    if (wordChoice.includes("a")) {
      var wordPosition = wordChoice.indexOf("a") + ""; //the plus and empty "" converts any number
      //to a string
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
      var wordPosition = wordChoice.indexOf("c") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("d") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("e") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("f") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("g") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("h") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("i") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("k") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("l") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("m") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("n") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("o") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var n = wordChoice.indexOf("p") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("q") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("r") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("s") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("t") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("u") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("v") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("w") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("x") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("y") + ""; //the plus and empty "" converts any number
      //to a string
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
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var wordPosition = wordChoice.indexOf("z") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(wordPosition).innerHTML = "z";
    }
    else {
      lives = lives - 1;
      updateImage()
    }
  }
  checkWinningCondition()
}

function checkWinningCondition() {
  if (document.getElementById("0").innerHTML != "_" && document.getElementById("1").innerHTML != "_"
    && document.getElementById("2").innerHTML != "_" && document.getElementById("3").innerHTML != "_"
    && document.getElementById("4").innerHTML != "_" && document.getElementById("5").innerHTML != "_") {
    document.getElementById("hidden").innerHTML = "You saved Tuco!"
  }
}



// Dashes are replaced with letters. When the innerHTML no longer contains dashes, 
// we can alert that the player has won.



function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

var restart_game = document.getElementById('reset');
restart_game.addEventListener('click', newGame);
function newGame() {
  window.location.reload()
}