
var chosenWord = ["jquery", ""]

const maxTries = 8;


document.addEventListener('click', handleGuess);

// images = document.querySelectorAll('.grid-tile-container');
// function showHangmanImage (index) { images[index].classList.remove('hidden')
// }
// function randomWord() {
//   answers = answers[Math.floor(Math.random() * answers.length)];
// }

function handleGuess(event) {
  let wordChoice = chosenWord[0]
  if (event.target.id == 'a') {
    document.getElementById('a').style.backgroundColor = 'aqua'
    ///if 'a' matches a letter in the chosen word and populate answer with letter. 
    //else if a is not a letter populate hangman.
    if (wordChoice.includes("a")) {
      document.getElementById('word_spaces').innerHTML = "a" + document.getElementById('word_spaces').innerHTML
    }
  }
  else if (event.target.id == 'b') {
    document.getElementById('b').style.backgroundColor = 'aqua'
    if (wordChoice.includes("b")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var n = wordChoice.indexOf("b") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(n).innerHTML = "b";
    } else {

    }
  }
  else if (event.target.id == 'c') {
  }
  else if (event.target.id == 'd') {
  }
  else if (event.target.id == 'e') {
  }
  else if (event.target.id == 'f') {
  }
  else if (event.target.id == 'g') {
  }
  else if (event.target.id == 'h') {
  }
  else if (event.target.id == 'i') {
  }
  else if (event.target.id == 'j') {
    document.getElementById('j').style.backgroundColor = 'aqua'
    if (wordChoice.includes("j")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var n = wordChoice.indexOf("j") + ""; //the plus and empty "" converts any number
      //to a string
      alert(n);
      document.getElementById(n).innerHTML = "j";
    }
  }
  else if (event.target.id == 'k') {
  }
  else if (event.target.id == 'l') {
  }
  else if (event.target.id == 'm') {
  }
  else if (event.target.id == 'n') {
  }
  else if (event.target.id == 'o') {
  }
  else if (event.target.id == 'p') {
  }
  else if (event.target.id == 'q') {
  }
  else if (event.target.id == 'r') {
  }
  else if (event.target.id == 's') {
  }
  else if (event.target.id == 't') {
  }
  else if (event.target.id == 'u') {
  }
  else if (event.target.id == 'v') {
  }
  else if (event.target.id == 'w') {
  }
  else if (event.target.id == 'x') {
  }
  else if (event.target.id == 'y') {
  }
  else if (event.target.id == 'z') {
  }
}
