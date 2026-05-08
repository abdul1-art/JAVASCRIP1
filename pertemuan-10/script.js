function clickBebas() {
    alert('function alert di click');
    console.log('console juga tampil');
    document.getElementById('box').style.backgroundColor = 'red';
    document.getElementById('box').textContent = 'box di click';
}
let age = document.getElementById('age');
function getData() {
    console.log(age.value);
}

let shoes = 'adidas';
let shoestwo = 'nike s          ';
console.log(shoes);
console.log(shoestwo.trim());

let price = '20.3';
let noShoues = '40';

console.log(noShoues);
// konver ke number 
console.log(parseFloat(noShoues));


