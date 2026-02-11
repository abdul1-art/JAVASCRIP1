// soal 1
let permenAna = 30;
let ngasihBudi = 10;
let sisaPermenAna = permenAna - ngasihBudi;
sisaPermenAna;
console.log("jumlah permen ana adalah " + sisaPermenAna);
console.log(sisaPermenAna * 2);
// kenapa hasilnya 40? karena sisa permen ana 20 dikali 2 hasilnya 40

// soal 2
let kucingAna = 2;
let yangPertamaNamanya = "ali";
let yangKeduaNamanya = "hasan";
let penggabunganNamaKucing = "ali " + "hasan";

console.log("nama kucing ana adalah " + penggabunganNamaKucing);
// ini teknik penggabungan string dengan operator +

// soal 3
let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasilBelalangNyamuk = +belalang + nyamuk;
console.log(hasilBelalangNyamuk);

let hasilNyamukAngsa = +nyamuk + angsa;
console.log(hasilNyamukAngsa);
// kenapa hasilnya begitu? 
// karena belalang dan nyamuk itu string jadi di konversi dulu ke number baru di jumlahkan dengan angsa

// soal 4  
let hargaBukuFiksi = 5000;
let hargaBukuNonFiksi = 7000;
let hargaPena = 2000;

let totalPerItemOne = hargaBukuFiksi * 5;
let totalPerItemTwo = hargaBukuNonFiksi * 3; 
let totalPerItemThree = hargaPena * 2;
let totalHarga = totalPerItemOne + totalPerItemTwo + totalPerItemThree;

console.log('totoal harga yang di keluarkan aisah' + ' ' + totalHarga);
// jadi total yang harus di bayar aisha adalah 50000

//soal 5
let penjumlahan1 = 5 + 3 * 2;
let penjumlahan2 = (5 + 3) * 2;
console.log(penjumlahan1);
//karena yang di kerjakan dari kanan dulu jadi 3 x 2 = 6 + 5 = 11
console.log(penjumlahan2);
//karena yang di kerjakan yang di dalam kurung dulu jadi 5 + 3 = 8 x 2 = 16

//soal 6
let kresek = 4;
let kotak = 6;
let ember = 5 + (kresek = kotak);

console.log(kresek);
console.log(kotak);
console.log(ember);
//karena disitu di tulis kresek = kotak jadi value kresek di ganti dengan value kotak kemudian di tambah 5 = 11

//soal 7
let x, y, z;
z = 5+10+15;
x = y = z;
console.log(x);
console.log(y);
console.log(z);
//jadi hasil x y z itu sama-sama 30 karena di tulis z = 5+10+15 jadi value z adalah 30 kemudian x y z di samakan dengan value z yaitu 30

//soal 8
let money = 4;
money *= 2;
money *= 2;
console.log(money);
//jadi awalnya money 4 di kali 2 jadi 8 kemudian 8 di kali 2 lagi jadi 16

//soal 9
let J = 5;
J++;

console.log(J);
//hasil j 6 karena arti dari ++ adalah di tambah 1

let K = 8;
K--;

console.log(K);
//hasil k 7 karena arti dari -- adalah di kurang 1

// soal 10
let room = 'hafs';
let age = 18;
let shoesNumber = '42';
let married = false;

// tipe data masing-masing variable sebagai berikut
console.log(typeof room);
console.log(typeof age);
console.log(typeof shoesNumber);
console.log(typeof married);





