let kresek = document.getElementById('myDiv');
console.dir(kresek);
console.log(kresek.textContent);
console.dir(document);

let box = document.getElementById('mySpan')
console.log(box.textContent);

// update value
box.textContent = 'hafidz';

console.log(box.textContent);

// updsate dengan su=ebuah tag yang value tagnya kosong
let text = document.getElementById('contect');
text.textContent = 100

// menambahkan tag html
// buat elemen paragraph
let paragraphElement = document.createElement('p');

// menyisikan elemen ke dalam sebuah div
document.getElementById('container').appendChild(paragraphElement);

// isi tag pnya
paragraphElement.textContent = 'ini adalah paragraf baru';

document.getElementById('container').appendChild(paragraphElement);

// value
let number = document.getElementById('phone');
console.log(number.value);

// mengambil value imput dari user
let gender = document.getElementById('gender');
console.log(gender.value);
