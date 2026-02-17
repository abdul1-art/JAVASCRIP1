// soal 1
let box = document.getElementById('welcomeBox');
console.log(box.textContent);

// update value
box.textContent = "Belajar DOM itu menyenangkan";
console.log(box.textContent);

let student = document.getElementById('studentName');
console.log(student.textContent);

// update value
student.textContent = "Abdul";
console.log(student.textContent);

// soal 2. tambah catatan belajar
let paragraph = document.createElement('p');
document.getElementById('noteArea').appendChild(paragraph);
paragraph.textContent = "Saya sedang belajar createElement";
console.log(paragraph.textContent);

// soal 3
let input = document.getElementById('userGender');
console.log(input.value);

// soal 4
let number = document.getElementById('contactNumber');
console.log(number.value);
number.value = "08123456789";
console.log(number.value);

// soal 5 Tombol Tambah Paragraf Otomatis  
let article = document.getElementById('articleContainer')
article.textContent = 'paragraf baru'

