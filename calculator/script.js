function zero () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 0;
    document.getElementById('result').textContent = total;
}
function one () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 1;
    document.getElementById('result').textContent = total;
}
function two () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 2;
    document.getElementById('result').textContent = total;
}
function three () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 3;
    document.getElementById('result').textContent = total;
}
function four () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 4;
    document.getElementById('result').textContent = total;
}
function five () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 5;
    document.getElementById('result').textContent = total;
}
function six () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 6;
    document.getElementById('result').textContent = total;
}
function seven () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 7;
    document.getElementById('result').textContent = total;
}
function eight () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 8;
    document.getElementById('result').textContent = total;
}
function nine () {
    let numb = document.getElementById('result').textContent;
    let total = numb + 9;
    document.getElementById('result').textContent = total;
}
function add () {
    let numb = document.getElementById('result').textContent;
    let total = numb + " + ";
    document.getElementById('result').textContent = total;
}
function subtraction () {
    let numb = document.getElementById('result').textContent;
    let total = numb + " - ";
    document.getElementById('result').textContent = total;
}
function multiply () {
    let numb = document.getElementById('result').textContent;
    let total = numb + " * ";
    document.getElementById('result').textContent = total;
}
function decimal () {
    let numb = document.getElementById('result').textContent;
    let total = numb + ".";
    document.getElementById('result').textContent = total;
}
function equals () {
    // buat sebuah variable, isinya resultNew
    let numb = document.getElementById('result').textContent;
    console.log(numb);

    // cari operatornya menggunakan Regex
    let operatorMatch = numb.trim().match(/[-+*]/);
    console.log(operatorMatch);
    let operator = operatorMatch[0]; 
    console.log(operator);

    // pecah angka kiri dan kanan
    let parts = numb.split(operator);
    console.log(parts);

    let n1 = Number(parts[0])
    let n2 = Number(parts[1])

    let total = 0;

    // kondisi menggunakan if
    if (operator == '-') {
        total = n1 - n2;
    } else if (operator == '+') {
        total = n1 + n2;
    } else if (operator == '*') {
        total = n1 * n2;
    }
    console.log(total);

    // update hasilnya ke resultNew
    document.getElementById('result').textContent = total;  
}
function clearResult () {
    document.getElementById('result').textContent = '';
}