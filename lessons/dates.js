// JS de Date tipide bir object'dir

const bugun = new Date();
console.log('bugun', bugun);

// bugun değişkeni ne tipinde object
let a = 5;
console.log(typeof bugun);
console.log('a tipi ne', typeof a);

// hangi yıl
const yil = bugun.getFullYear();
const gun = bugun.getDate(); // ayın kaçıncı günü
const ay = bugun.getMonth(); // hangi ay
// not js ay değerleri 0 indeksten başlatıyor
const saat = bugun.getHours(); // saat değeri
const dakika = bugun.getMinutes();
// dakika değeri

console.log('yil', yil);
console.log('gun', gun);
console.log('ay', ay + 1); // doğru ay değeri
console.log('saat', saat);
console.log('dakika', dakika);

// var dt = new VarDate();
// ay/gun/yıl formatında mm.dd.yyyy mm-dd-yyyy mm/dd/yyyy formatlarını kabul ediyor.
// mm-dd-yyyy hh:MM:ss formatına uygun bir tarih oluşturuyor.
// Tarih değerleri yanlış girersek ayı 12 den buyuk gunude 31 den buyuk girersek invalidDate hatası alırız.
var gun1 = new Date('12-10-2021 13:30:15');
console.log('gun1', gun1);
// consturctor ile yıl,ay Index,gun,saat,dakika,saniye cinsinden tarih oluşturabiliriz. bütün parametreler number tipinde olmalıdır.
// 11. ay indeksi 12. ay olur.
var gun2 = new Date(2021, 11, 23, 10, 30, 13);
console.log('gun2', gun2);
// iki tarihi birbirinde çıkarabilir miyiz.

const dateOne = new Date('05/20/2023 10:30'); // 20th April 2021
const dateTwo = new Date('04/10/2021 17:15'); // 10th April 2021
console.log('yıl-farki', dateOne.getFullYear() - dateTwo.getFullYear()); // 2
console.log('ay-farki', dateOne.getMonth() - dateTwo.getMonth()); // 1
console.log('gun-farki', dateOne.getDate() - dateTwo.getDate()); // 10
// 2 yıl 1 ay 10 gün fark var. - 7 saat 15 geride
console.log('saat-farki', dateOne.getHours() - dateTwo.getHours());
console.log('dakika-farki', dateOne.getMinutes() - dateTwo.getMinutes());

// tarih değiştirme işlemleri
const gunİleri = new Date(dateOne.setDate(5)); // ayın 5'ine ayarla
const yılGeri = new Date(dateOne.setFullYear(2023, 6, 10)); // 2023 6. ay indeksi 10 gün yap
const ayGeri = new Date(dateOne.setMonth(2)); // ayı 2 olarak değiştir. Mart ayı 2 indekse denk gelir.

console.log('gunİleri', gunİleri);
console.log('yılGeri', yılGeri);
console.log('ayGeri', ayGeri);

// tarih işlemleri JS de zor olduğundan moment,datefns gibi iki tane yaygın kütüphane yazılmıştır.
