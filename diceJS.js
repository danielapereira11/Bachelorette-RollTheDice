let images = [
  "Images/die-1.png",
  "Images/die-2.png",
  "Images/die-3.png",
  "Images/die-4.png",
  "Images/die-5.png",
  "Images/die-6.png",
];
let dice = document.querySelectorAll(".dice-image");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);

    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML =
      "Saiu-te um " + (dieOneValue + 1 + (dieTwoValue + 1)) + " 🙈";
  }, 2000);
}

let rollButton = document.querySelector("button");
rollButton.addEventListener("click", roll);
