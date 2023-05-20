// JS Değişkenler ilkel Primative Types

// html sayfasında js çalıştırmak için script tagi açıyoruz
// inline js kodu

// JS de number,boolean,string ilkel veri tipleri var
// long,int,decimal,float,double, char gibi veri tipleri yok.
const a = 1; // number c# için short,long,byte
const b = 'ali'; // string js de '' string için tek tırnak
const f = 'X'; // string  c# için char
let c = true; // boolean
let d = 1.5; // number c# için decimal,float yada double
var r = 5.5; // var değişkenler const ve letten farklı olarak her bir durumu içerebilir.  C# 9 C# 12 ES6 standatına kadar JS de let ve const keyword yoktu.Bu sebep ile herkes var keyword ile değişken tanımlıyordu. Buda değişkenlerin bazı istisnai durumları kontrol etmesi gereken duruları zorlaştırıyordu.
r = 5.6;

// let ve const tipinde değişkenler tanımlanır.
// let ile tanımlı değişkenlerin değerleri kod bloğu içerisinde değişir
// const ile tanımlı olanlar alt satırlarda farklı bir değer alamazlar

// Assignment to constant variable hatası
// f = 'Y';
// js strong typed bir dil olmadığı için geliştirme anında hata kodlarını göstermiyor.
d = 5.5;
// let değişkenlerin değeri sonradan program içerisinde değişebilir.

// tarayıcdaki console sekmesine kodun değerini yazdırmak için kullanıldı.
console.warn(d);

// js tanımlamış bir değişken değeri sonradan başka bir değişken değeri ile değiştirilebilir. Hataya müsait bir dil. Çok esnek bir dil.
d = 'Emre';
console.warn(d);
// aynı isimde değişken tanımlamaya izin vermiyor.
//var d = 67;
