// jawaban no 1

let nilaiUjian = 78;

if (nilaiUjian > 90) {
  console.log("nilai a");
} else if (nilaiUjian > 75) {
  console.log("nilai b");
} else {
  console.log("nilai c");
}

// jawaban no 2
let password = "admin123";

if (password === "admin123") {
  console.log("Login Berhasil");
} else {
  console.log("Password Salah");
}

// jawaban no 3
let hari = 1;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak valid");
}

// jawaban no 4
let role = "admin";
switch (role) {
  case "admin":
    console.log("Anda memiliki akses penuh");
    break;
    case "user":
      console.log("Akses terbatas");
      break;
      default:
        console.log("tidak dikenali");
}
      
// jawaban no 5
let umur = 20;
let status = (umur > 18) ? "Dewasa" : "Anak-anak";

console.log(status);

// jawaban no 6
let isLogin = true; 
let message = isLogin ? "Selamat datang" : "Silakan login";
console.log(message);

// jawaban no 7
let nilai = 80;

let nilai2 = nilai > 90 ? "A" : nilai > 75 ? "B" : nilai > 60 ? "C" : "D";
console.log(nilai2);

// jawaban no 8
let totalBelanja = 75000;
let diskon = totalBelanja > 100000 ? "Diskon 20%" :  totalBelanja > 50000 ? "Diskon 10%" : "Tidak ada diskon";
console.log(diskon);

// jawaban no 9
let angka = 7;
let hasil = angka % 2;
console.log(hasil);

if (hasil === 0) {
  console.log('genap');
}else {
  console.log('ganjil');
}
