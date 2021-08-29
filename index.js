// import randomcolor from "randomcolor"

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]


//User typing questions on the input
const adviceField = document.getElementById("question");


//User clicking the advise button
const adviceBtn = document.getElementById("submit");
const adviceTxt = document.querySelector("p");

//Function that allows answer to be populated
adviceBtn.addEventListener("click", function() {
  let randomNum = Math.floor(Math.random() * 6);
  adviceTxt.innerHTML = (advice[randomNum]);
  adviceField.value = " ";
})
