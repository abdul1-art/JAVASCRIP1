let btn = document.getElementById("click");
btn.addEventListener("click", () => {
  alert("button sedang di click");
});

let btn2 = document.getElementById("clk");
btn2.addEventListener("click", () => {
  alert("button");
  console.log("button sedang di click2");
  let paragraphElement = document.createElement("P");
  paragraphElement.textContent = "paragraf baru";
  document.getElementById("kosong").appendChild(paragraphElement);
});


let kosong2 = document.getElementById("kosong2")
let input = document.getElementById("input");
let button = document.getElementById("btn3");

button.addEventListener("click", () => {
  let asik = input.value;
  let paragraf = document.createElement("p");
  paragraf.textContent = asik;
  kosong2.appendChild (paragraf);
  
});
 