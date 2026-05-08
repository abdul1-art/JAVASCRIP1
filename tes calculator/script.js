function one () {
    // buat elemen variable isinya result
    let numb = document.getElementById('resultNew').textContent;


    // buat sebuah variable, isinya penambahan 1
    let total = numb + 1;

    // update isinya resultNew dengan isi varibale totalw
    document.getElementById('resultNew').textContent = total;
}
function two () {
    // buat elemen variable isinya resultNew
    let numb = document.getElementById('resultNew').textContent;
    let total = numb + 2;
    
    // update isinya resultNew dengan isi varibale total
    let resultNew = document.getElementById('resultNew').textContent = total;
}
function three () {
    // buat elemen variable isinya resultNew
    let numb = document.getElementById('resultNew').textContent;
    let total = numb + 3;
    // update isinya resultNew dengan isi varibale total
    document.getElementById('resultNew').textContent = total;
}
function four () {
    // buat elemen variable isinya resultNew
    let numb = document.getElementById('resultNew').textContent;
    let total = numb + 4;
    // update isinya resultNew dengan isi varibale total
    document.getElementById('resultNew').textContent = total;
    console.log(total);
}
function subtraction () {
    // buat elemen variable isinya resultNew
    let numb = document.getElementById('resultNew').textContent;
    // buat sebuah variable, isinya resultNew

    // buat sebuah variable, isinya penambahan -
    let total = numb + " - ";

    // update isinya resultNew dengan isi varibale total
    document.getElementById('resultNew').textContent = total;
}
function add () {
    // buat elemen variable isinya resultNew
    let numb = document.getElementById('resultNew').textContent;
    // buat sebuah variable, isinya resultNew
    // buat sebuah variable, isinya penambahan +
    let total = numb + " + ";
    console.log(total);
    
    // update isinya resultNew dengan isi varibale total
    document.getElementById('resultNew').textContent = total;
} 
function multiply () {
    // buat elemen variable isinya resultNew
    let numb = document.getElementById('resultNew').textContent;
    // buat sebuah variable, isinya penambahan *
    let total = numb + " * ";
    // update isinya resultNew dengan isi varibale total
    document.getElementById('resultNew').textContent = total;
}
function equals () {
    // buat sebuah variable, isinya resultNew
    let numb1 = document.getElementById('resultNew').textContent;
    console.log(numb1);

    // cari operatornya menggunakan Regex
    let operatorMatch = numb1.trim().match(/[-+*]/);
    console.log(operatorMatch);
    let operator = operatorMatch[0]; 
    console.log(operator);

    // pecah angka kiri dan kanan
    let parts = numb1.split(operator);
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
    document.getElementById('resultNew').textContent = total;
}
