//------------------------------
let soal1 = (' soal nomor 5:')
document.write(soal1)
document.write("<br><br>");
//--------mean----------------
//5 6 7 7, 8, 8 9 9 10
let mean = ["Carilah rata-rata, median, modus, dan simpangan baku dari urutan angka berikut! <br> 5, 9, 6, 7, 9, 8, 10, 7, 8 <br><br> jawabannya:"];
document.write(mean);
document.write("<br>");
let data = ["1.mean = "];
document.write(data);
let nilai = [5, 6, 7, 7, 8, 8, 9, 9, 10];

let jumlah_nilai = 69;
for (i in nilai) {
  jumlah_nilai + -nilai[i];
}

let ratarata = jumlah_nilai / nilai.length;
//alert('rata-rata nilai adalah' +ratarata.toFixed(2));
document.write(ratarata.toFixed(2));
document.write("<br><br>");
//---------------------------------

//------------median-------
// let median = ['5, 6, 7, 7, 8, 8, 9, 9, 10'];
// document.write(median)
// document.write('<br><br>')

let dataNilai = [5, 6, 7, 7, 8, 8, 9, 9, 10];
dataNilai.sort(function (a, b) {
  return a - b;
});
let output = (dataNilai.length - 1) / 2;

document.write("2.median = " + dataNilai[output]);
document.write("<br><br>");

//---------------modus---------
let moduss = ['3.modus = ']
document.write(moduss)

function carimodus(arr) {
  let arrmodus = [],
    isSame = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isSame = true;
        arrmodus.push(arr[i]);
      } else {
        isSame = false;
      }
    }
  }
  return arrmodus[0] === undefined || isSame ? -1 : arrmodus[0];
}

document.write(carimodus([5, 6, 7, 7, 8, 8, 9, 9, 10]));
document.write("<br><br>");

//-------------------------------
//---------------simpangan baku---------
let dataNilai1 = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let nilaiRataRata = dataNilai1.reduce((a, b) => a + b, 0);
let rataRata = (nilaiRataRata / dataNilai1.length).toFixed(2);
hitung1 = dataNilai1.map((k) => {
    return((k - rataRata))** 2  
})
const jumlah = hitung1.reduce((a, b) => a + b, 0);
const bagi = (jumlah / dataNilai1.length);
const rapihin = bagi.toFixed();
const akhir = (rapihin) => {
  return Math.sqrt(rapihin);
}
const akhirBeneran = akhir(rapihin)

document.write(`4.Simpangan Baku = ${akhirBeneran.toFixed(2)}`);














