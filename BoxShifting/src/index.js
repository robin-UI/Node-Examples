let colors = ["red", "green", "yellow"];
let btnNxt = document.querySelector("#nextbtn");
let btnPvs = document.querySelector("#pvs");

let boxs = document.querySelectorAll(".box");

for (let i = 0; i < boxs.length; i++) {
  boxs[i].style.backgroundColor = colors[i];
}

const next = () => {
    colors.unshift(colors.pop());
    console.log(colors);
    for (let i = 0; i < boxs.length; i++) {
      boxs[i].style.backgroundColor = colors[i];
    }
  console.log(boxs);
};

const privous = () => {
  colors.push(colors.shift());
  console.log(boxs);
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].style.backgroundColor = colors[i];
  }
};

btnNxt.addEventListener("click", next);
btnPvs.addEventListener("click", privous);
