let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
box1.addEventListener("click", () => {
  box1.classList.toggle("success1");
});
box2.addEventListener("click", () => {
  box2.classList.toggle("success2");
}); 
box3.addEventListener("click", () => {
  box3.classList.toggle("success3");
});

let logo = document.getElementById("logo");
let teks = document.getElementById("teks");
logo.addEventListener("click", () => {
  document.body.classList.toggle("success4");
  teks.classList.toggle("success5");
  box1.classList.toggle("success6");
  box2.classList.toggle("success7");
  box3.classList.toggle("success8");
});

