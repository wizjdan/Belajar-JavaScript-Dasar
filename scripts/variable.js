/*
Variable adalah tempat untuk menyimpan data.
Dengan menyimpan data di variable, kita bisa menggunakan lagi dengan menyembutkan nama variablenya.
penamaan variable menggunaka format camel case.
*/

var firstName;
var lastName;

firstName = "Pangestu"
lastName = "Nugraha"

var fullName;
fullName = firstName + " " + lastName;

document.writeln(fullName);

// Membuat langsung dengan value

var firstName = "Pangestu";
var lastName = "Nugraha";

var fullName = firstName + " " + lastName;

document.writeln(fullName);

// Mulai sekarang kata kunci var tidak diperbolehkan lagi untuk dipakai, Jadi sekarang untuk membuat variable
// di javascript mengunakan let

let namaDepan;
let namaBelakang;

namaDepan = "Pangestu"
namaBelakang = "Nugraha"

let namaLengkap;
namaLengkap = namaDepan + " " + namaBelakang;

document.writeln(namaLengkap);

// Membuat langsung dengan value

let namaSatu = "Pangestu";
let namaDua = "Nugraha";

let namaTiga = namaSatu + " " + namaDua;

document.writeln(namaTiga);

//Kata kunci const pada variable tidak akan bisa dirubah lagi.

const country = "Indonesia";
country = "Jepang"; //error

document.writeln(country);