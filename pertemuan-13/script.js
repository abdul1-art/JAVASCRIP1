let apple = true
let orange = false

console.log(apple);
console.log(orange);

console.log(apple && true);
console.log(apple && false);


let age = 18;
let hasilUjian = 90;
let nilaiKelulusan = 91;
let hasCertificate = true;

console.log(age > 18 && nilaiKelulusan >= 90 && hasCertificate);

if (age <= 18 && nilaiKelulusan >= 90 && hasCertificate) {
    console.log('bisa daftar uim');
} else {
    console.log('tidak bisa daftar uim');
}


let apple2 = true;
let orange2 = false;

console.log(apple2 || true);
console.log(apple2 || false);

let abdurrahmah = 18;
let abdul= 93;
let fadhil = 90;
let nilaiKelulusanSantri = 91;

if (abdurrahmah >= 90 || abdul >= 90 || fadhil >= 90 || nilaiKelulusanSantri >= 90 ) {
    console.log('lulus');
} else {
    console.log('tidak lulus');
}

let lulus2 = true;
let lulus3 = false;

console.log(lulus2);
console.log(lulus3);

let student = false;

if (!student) {
    console.log('bukan mahasiswa');
} else {
    console.log('mahasiswa');
}


// operator not ! membalikan nilai boolean
let apple3 = true;
let orange3 = false;
console.log(!apple3);
console.log(!orange3);

let umur = 30;
let memilikiKTP = true;
let tidakMemilikiKTP = true;

if (umur >= 17 && memilikiKTP && tidakMemilikiKTP) {
    console.log('bisa membuat sim');
} else {
    console.log('tidak bisa membuat sim');
}