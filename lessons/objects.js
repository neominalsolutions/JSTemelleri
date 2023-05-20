// JS objeler 3 farklı şekilde tanımlanır
// 1 class yöntemi
// 2 tanımlama şekli ise object literal yöntemi
// 3 function olarak obje tanımalama yöntemi (eski bir yöntem)

// user object tipi
// literal obje tanımlama yöntemi diyoruz
// ES6 öncesi js obje tanımalama şekli örneği
const user = {
	username: 'ali.can', // username değerleri nesneye ait propertyler
	password: '12345',
	name: 'ali',
	surname: 'can',
	yemekYe: function () {
		// obje içindeki fonkisyonlara method
		// listeral objede method tanımı
		console.log('yemek ye');
	},
};
console.log('user', user);
console.log('username', user.name);
user.yemekYe(); // user nesnesine ait methodu çağır.
// burdaki function bir nesne olmuş oluyor
// animal(name) constructor oluyor name değeri constructor gönderilen bir parametre oluyor // function object yöntemi
function hayvan(isim) {
	// hayvan burada class oluyor
	this.isim = isim; // public property
	// function içindeki function ise nesnenin methodu oluyor
	this.yemekYe = function () {
		// yemek ise function içinde function olduğu için method oluyor.
		// this keyword function yönteminde c# daki public denk gelir.
		// method oluyor
		console.log('kedi yemek ye');
	};
}
const kedi = new hayvan('van kedisi'); // instance oluyor
console.log('kedinin tipi', typeof kedi);
kedi.yemekYe(); // kedi instance methodunu çağırmak oluyor.

// ES6 ile class tanımları yani obje tanımları artık c#,java dillerindeki gibi yazılabiliyor.

// js de class içerisinde değerler default public ayarlanmış
class Insan {
	name; // property default public string name {get;set;}
	surname; // public
	#email; // # işareti ile tanımlanan propertyler artık private oluyor. (private)
	// get;set; yok // private bir alana değer set etmek yada private bir alanın değerini okumak için getter setter methodlar ile public oluyor
	// getter setterlar js de method olarak yazılıyor.
	getEmail() {
		// javada benzer bir getter setter kodu var.
		return this.#email;
	}

	setEmail(value) {
		this.#email = value;
	}

	constructor(name, surname) {
		// Insan(string name,string surname)
		// constructor
		this.name = name;
		this.surname = surname;
	}
	// method
	getFullName() {
		// Nesne içerisinde değer erişimi için this keyword kullanmak zorunludur.
		return this.name + ' ' + this.surname;
	}
}

const ugur = new Insan('ugur', 'can');
ugur.setEmail('ugur.can@test.com'); // setter örneği
let email = ugur.getEmail(); // ugur.can@test.com
console.log('email', email);
let fullName = ugur.getFullName(); // ugur can
console.log('fullName', fullName);
