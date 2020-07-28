
var chosenWord = ["jquery", "binary", ""]
var wordChoice = chosenWord[Math.floor(Math.random() * chosenWord.length)];

const maxTries = 8;


document.addEventListener('click', handleGuess);

// images = document.querySelectorAll('.grid-tile-container');
// function showHangmanImage (index) { images[index].classList.remove('hidden')
// }
// function randomWord() {
//   answers = answers[Math.floor(Math.random() * answers.length)];
// }

function handleGuess(event) {
  //let wordChoice = chosenWord[0]
  if (event.target.id == 'a') {
    document.getElementById('a').style.backgroundColor = 'brown'
    if (wordChoice.includes("a")) {
      var z = wordChoice.indexOf("a") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "a";
    }
  }
  else if (event.target.id == 'b') {
    document.getElementById('b').style.backgroundColor = 'aqua'
    if (wordChoice.includes("b")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("b") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "b";
    }
  }
  else if (event.target.id == 'c') {
    document.getElementById('c').style.backgroundColor = 'aqua'
    if (wordChoice.includes("c")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("c") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "c";
    }
  }
  else if (event.target.id == 'd') {
    document.getElementById('d').style.backgroundColor = 'aqua'
    if (wordChoice.includes("d")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("d") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "d";
    }
  }
  else if (event.target.id == 'e') {
    document.getElementById('e').style.backgroundColor = 'aqua'
    if (wordChoice.includes("e")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("e") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "e";
    }
  }
  else if (event.target.id == 'f') {
    document.getElementById('f').style.backgroundColor = 'aqua'
    if (wordChoice.includes("f")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("f") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "f";
    }
  }
  else if (event.target.id == 'g') {
    document.getElementById('g').style.backgroundColor = 'aqua'
    if (wordChoice.includes("g")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("g") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "g";
    }
  }
  else if (event.target.id == 'h') {
    document.getElementById('h').style.backgroundColor = 'aqua'
    if (wordChoice.includes("h")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("h") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "h";
    }
  }
  else if (event.target.id == 'i') {
    document.getElementById('i').style.backgroundColor = 'aqua'
    if (wordChoice.includes("i")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("i") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "i";
    }
  }
  else if (event.target.id == 'j') {
    document.getElementById('j').style.backgroundColor = 'aqua'
    if (wordChoice.includes("j")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("j") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "j";
    }
  }
  else if (event.target.id == 'k') {
    document.getElementById('k').style.backgroundColor = 'aqua'
    if (wordChoice.includes("k")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("k") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "k";
    }
  }
  else if (event.target.id == 'l') {
    document.getElementById('l').style.backgroundColor = 'aqua'
    if (wordChoice.includes("l")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("l") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "l";
    }
  }
  else if (event.target.id == 'm') {
    document.getElementById('m').style.backgroundColor = 'aqua'
    if (wordChoice.includes("m")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("m") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "m";
    }
  }
  else if (event.target.id == 'n') {
    document.getElementById('n').style.backgroundColor = 'aqua'
    if (wordChoice.includes("n")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("n") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "n";
    }
  }
  else if (event.target.id == 'o') {
    document.getElementById('o').style.backgroundColor = 'aqua'
    if (wordChoice.includes("o")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("o") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "o";
    }
  }
  else if (event.target.id == 'p') {
    document.getElementById('p').style.backgroundColor = 'aqua'
    if (wordChoice.includes("p")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var n = wordChoice.indexOf("p") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(n).innerHTML = "p";
    }
  }
  else if (event.target.id == 'q') {
    document.getElementById('q').style.backgroundColor = 'aqua'
    if (wordChoice.includes("q")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("q") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "q";
    }
  }
  else if (event.target.id == 'r') {
    document.getElementById('r').style.backgroundColor = 'aqua'
    if (wordChoice.includes("r")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("r") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "r";
    }
  }
  else if (event.target.id == 's') {
    document.getElementById('s').style.backgroundColor = 'aqua'
    if (wordChoice.includes("s")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("s") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "s";
    }
  }
  else if (event.target.id == 't') {
    document.getElementById('t').style.backgroundColor = 'aqua'
    if (wordChoice.includes("t")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("t") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "t";
    }
  }
  else if (event.target.id == 'u') {
    document.getElementById('u').style.backgroundColor = 'aqua'
    if (wordChoice.includes("u")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("u") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "u";
    }
  }
  else if (event.target.id == 'v') {
    document.getElementById('v').style.backgroundColor = 'aqua'
    if (wordChoice.includes("v")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("v") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "v";
    }
  }
  else if (event.target.id == 'w') {
    document.getElementById('w').style.backgroundColor = 'aqua'
    if (wordChoice.includes("w")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("w") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "w";
    }
  }
  else if (event.target.id == 'x') {
    document.getElementById('x').style.backgroundColor = 'aqua'
    if (wordChoice.includes("x")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("x") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "x";
    }
  }
  else if (event.target.id == 'y') {
    document.getElementById('y').style.backgroundColor = 'aqua'
    if (wordChoice.includes("y")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("y") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "y";
    }
  }
  else if (event.target.id == 'z') {
    document.getElementById('z').style.backgroundColor = 'aqua'
    if (wordChoice.includes("z")) {
      //If word includes J, have an array that connects to the ID in our span IDs.
      //Our string is any given word. Variable can be anything. We need to link our
      // ID to the ID created with <span>
      var z = wordChoice.indexOf("z") + ""; //the plus and empty "" converts any number
      //to a string
      document.getElementById(z).innerHTML = "z";
    }
  }
}
