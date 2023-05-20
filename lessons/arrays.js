// JS array tipi object tipindedir. yani ilkel veri tipine girmez
// JS farklı tipte değerelere sahip elemanlardan oluşan bir dizi tanımlayabiliriz
let arr = [1, 2, 'Ali', 'Veli', true, 1.5];
// JS dizi boyutunu tanımlamıyoruz yani diziler eleman eklendikçe otomatik olarak büyüp küçülüyor

console.log('arr', arr);

// listenin sonuna bir değer ekleme işlemi kodu
arr.push('Alper'); // listeye eleman eklemek için add diye bir tanım yok.
// arr = [1, 2, 'Ali', 'Veli', true, 1.5, 6];
console.log('pushtan sonra', arr);

// listenin sonunda bir değer çıkartır.
arr.pop();
console.log('poptan sonra', arr);

// indeksinden bir değer çıkarma
arr.splice(1, 2); // 1.indeksten 2 adet sil
console.log('splice ile indekten silmeden sonra', arr);

// listenin başına eleman eklemek için
arr.unshift('Hasan'); // listenin başına hasan ekle
console.log('unshift sonra', arr);

arr[4] = 'Can'; // 4.indeksin değeri değişti

// listenin başından bir eleman silmek için
arr.shift();
console.log('shiftten sonra', arr);

// array leng ve sort işlemleri

arr.length; // dizideki eleman sayıs
arr.sort(); // dizideki elemanları sıralama
arr.includes(5); // dizi içerisinde 5 değeri var mı, includes c# contains' benzer bir kullanımdır.

const arr1 = new Array(1, 5, 7, 88, 23, 87);
const arr2 = new Array(8, 99, 2, 13, 12);
const arr3 = arr1.concat(arr2); // iki array concat ile birleştirdik.
// default string sort yapar. numeric sort işleminde aşaığıdaki gibi bir fonksiyon çaşılır.
const arr4 = arr3.sort(function (a, b) {
	return a - b;
});
console.log('arr3', arr4);
// array içerisinde değerlerde nasıl döneriz
// 1.yöntem
arr3.forEach(function (value) {
	console.log('value', value);
});

// 2.yöntem
for (let index = 0; index < arr3.length; index++) {
	const element = arr3[index];
	console.log('element', element);
}

// 3.yöntem
// forOf foreach benzer
// foreach (const item in arr3) {
// 	console.log('item', item);
// }
for (const item of arr3) {
	console.log('item', item);
}
