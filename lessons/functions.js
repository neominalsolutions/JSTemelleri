// c# daki method konusuna karşılık gelir, değer döndüren veya değer döndürmeyen fonksiyonlarımız vardır
// js de yaygın olarak iki farklı yazım şeklinde fonksiyon tanımlaması vardır.
// Default Functions (JS ilk günden beri default function var)
// Arrow Functions (ES6) standardizasyon sonrası geldi.

// toplama işlemi yapan bir function tanımlamış olduk
// js de genelde function isimleri küçük harf tanımlanır.
function topla(sayi1, sayi2) {
	// topla(3); işlemde sayi2 diye bir parametre gönderilmese dahi js kodu çalışıyor böyle durumlarda sayi2 değişkeni olmadığı için js buna yokluk yani tanımsız undefined olarak görüyor
	console.log(typeof sayi2);

	// js any bir tip var herşey gönderilebilir.
	// isNan ile js de bir değeri numeric bir değer olup olmadığını kontrol ediyoruz
	// inNan ise metinsel olan bir değerin numeric olmadığını kontrol ediyor.
	sayi1 = Number(sayi1);
	sayi2 = Number(sayi2); // Ali de olsa Number tipine çevirmeye çalışacak

	if (isNaN(sayi2) || isNaN(sayi1)) {
		// Ali
		throw new Error('Numeric değer değil 1');
		// throw new Exception('') c# hata
	}

	return sayi1 + sayi2;
}

// const sonuc1 = topla('ali', 4); // sonuc ne olacak ? sayi1 numeric değildir hata alır
//const sonuc2 = topla(3); // sonuc ne olacak ?  sayi tanımsızdır hata alır
const sonuc3 = topla(3, 4); // sonuc 7
const sonuc = topla('3', '4'); // sonuc 7

console.log(`toplam : ${sonuc3}`); // $"toplam: {sonuc}" // string literak yazım şekli
// Alt Gr + ; tuş kombinasyonu ile gelir.

// double Topla(double sayi1, double sayi2){ return sayi1 + sayi2};

// arrow function
const topla2 = (sayi1, sayi2) => {
	sayi1 = Number(sayi1);
	sayi2 = Number(sayi2);

	if (isNaN(sayi1) || isNaN(sayi2)) {
		throw new Error('sayı tipinde değil');
	}

	return sayi1 + sayi2;
};

// arrow function tek satır yazım şekli
const mesajGoster = (mesaj) => console.log(`mesajımız ${mesaj}`);

function mesajGosterDefault(mesaj) {
	// js de breakpoint kullanımı için debugger kodu yazık.
	debugger;
	console.log(`mesajımız ${mesaj}`);
}

const s = topla(5, 10);
mesajGoster('mesaj-1'); // void function return yok
mesajGosterDefault('mesaj-2'); // void function return yok

console.log('s-sonuc', s);
