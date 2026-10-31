//function
//2. expression


//1.declation
/*
function name(parameter){
    code block;
}
*/
function sayHello(){
  return "Hello world";
}
console.log(sayHello());

function sapaNama(name){
  return " My Name is " + name;
}
console.log(sapaNama("anis"));
console.log(sapaNama("mahrn"));

//menghitung luas persegi panjang menggunakan function
console.log(sapaNama(" nisa"));
console.log(sapaNama("asin"));

function persegiPanjang(panjang, lebar){
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah " + luas;
}
console.log(persegiPanjang(4, 5));
console.log(persegiPanjang(100, 27));

//menghitung luas segitiga menggunakan function
//luas = 1/2 *alas* tinggi

function Segitiga(a, t){
  let  luas = 1/2 * a * t;
  return "luas segitiga adalah " + luas;
}
console.log(Segitiga(10, 55));

//konversi suhu dari fahrenheit menjadi celcius menggunakan function
// C = (5/9) * (f-32);

function konversiSuhu(f){
  let rumus = (5/9) * (f - 32);
  return f + "°F = " + "°C";
}
console.log(konversiSuhu(50));
console.log(konversiSuhu(59));

//2. function expression
const hello = function(){
  return "hello world"
}
console.log(hello);
console.log(hello());

//1. sapanama
//2. luas persegi panjang
//3. luas segitiga
//4. konversi suhu

//1.sapanama
 const sapaNama = function(nama){
  return "my name is" + nama;
 }
 console.log(sapa(annis))

 //2.
 const persegiPanjang1 = function (panajang1, lebar1){
  let luas1 = panjang1 * lebar1;
 }
 console.log(persegiPanjang1(3, 8));

 //3.
 const luasSegitiga = function (alas, tinggi1){
  let luas2 = 0.5 * alas1 *tinggi1;
  return "luas segitiga adalah " + luas2;
 }
 console.log(luasSegitiga(5,6));

 //4.
 const konversisuhu = function(F){
  let suhu = (5/9) * (F-32);
  return F + "+ suhu + "°C";
 }
 console.log(konversiSuhu(59));


 //Function Arrow;
 const persegiPanjang2 = (panjang, lebar) =>
  "luas persegi panjang adalah " + panjang * lebar;
 console.log(persegiPanjang2(5, 6));
 
 //1. say hello
 //2. sapa nama
 //3. luas segitiga
 //4. konversi suhu
 
 //1. 
 const sayHello1 = () => "Hello World";
 console.log(sayHello1());

 //2.
 const sapaNama1 = (nama) =>
  "my name is " + nama;
 console.log(sapaNama1("annis"));

 //3.
 const luasSegitiga2 = (alas, tinggi) =>
  "luas segitiga adalah " + 1/2 * alas *tinggi;
 console.log(luassegitiga2(2,5));
 