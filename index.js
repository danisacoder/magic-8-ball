// import randomcolor from "randomcolor"

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

// generate random light colors:
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})

// var randomColor = require('randomcolor'); // import the script
// var color = randomColor(); // a hex code for an attractive color

const adviceBtn = document.querySelector("button");
const adviceTxt = document.querySelector("p");

adviceBtn.addEventListener("click", function() {
  let randomNum = Math.floor(Math.random() * 6)
  adviceTxt.innerHTML = (advice[randomNum])
})
