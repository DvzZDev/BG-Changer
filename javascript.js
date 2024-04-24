const btn = document.getElementById("btn");
const vp = document.getElementById("mainBox");

let red, green, blue;

function asingRandom() {
  return Math.floor(Math.random() * 255);
}

function change() {
  let red = asingRandom();
  let green = asingRandom();
  let blue = asingRandom();
  vp.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
console.log(red);
console.log(blue);
console.log(green);

btn.addEventListener("click", change);

console.log(vp.style);
