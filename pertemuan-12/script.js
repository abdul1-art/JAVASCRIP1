// if statement
let ips = 8;
let minimalRemed = 8;
console.log(ips < minimalRemed);

if (ips <= minimalRemed) {
  console.log("kondisi" + "dijalankan");
}

if (true) {
  console.log("kondisi" + "dijalankan");
} else {
  console.log("kondisi" + "tidak dijalankan");
}

if (false) {
  console.log(hasfh1);
} else if (false) {
  console.log("kondisi" + "dijalankan");
} else {
  console.log("kondisi" + "tidak dijalankan");
}

// switch statement
let buah = "apel";
switch (buah) {
  case "apel":
    console.log("buah apel");
    break;
  case "jeruk":
    console.log("buah jeruk");
    break;
  case "mangga":
    console.log("buah mangga");
    break;
  default:
    console.log("hari tidak valid");
    break;
}
const binatang = "jerapah";
switch (binatang) {
  case "gajah":
    console.log("binatang gajah");
    break;
  case "jerapah":
    console.log("binatang jerapah");
    break;
  case "harimau":
    console.log("binatang harimau");
    break;
  default:
    console.log("binatang tidak valid");
    break;
}

// latihan
let bInggris = 87;
let bIndonesia = 85;
let nilaiIps = 70;
let sejarah = 80;

let nilaiKelulusanInggris = 90;
let nilaiKelulusanIndonesia = 80;
let nilaiKelulusanIps = 75;
let nilaiKelulusanSejarah = 80;

if ((bInggris > nilaiKelulusanInggris)) {
  console.log("lulus tanpa remedial");
}else if (bIndonesia <= nilaiKelulusanInggris) {
    console.log("lulus dengan remedial");
}else {
    console.log("tidak lulus");
}

// 
let kelulusan = bIndonesia >= nilaiKelulusanIndonesia ? "kodok" : "tidak lulus";
    sejarah >= nilaiKelulusanIps ? "kucing":
    nilaiIps <= nilaiKelulusanIps ? "ayam":
    bInggris >= nilaiKelulusanSejarah ? "sapi" : "kuda";
console.log(kelulusan);

// penggunaan ?
let login = true;
let hasilBox = login ? "box terbuka" : "box tertutup";
console.log(hasilBox);