'use strict';


console.log(11);


// //function
// const sayHello = function () {
// console.log('Hello');
// }


//function
// const sayHello = ( () => console.log('Hello'));


// const sayHello = (name => console.log(name+' Hello'));

// const sayHello = name =>  `${name} Hello`;
//
// console.log(sayHello("nawaf"));
//
// const add = (x,y) => console.log(x+y);
//
// add(2,5);

//
// const addFive = (num) => 5 + num;
// addFive(2);
//
// const divide = (num1, num2) => num1 / num2;
// console.log(divide());
//
//
//  const whoIsTheBestIA = () => {
//   let iaName = 'Alanoud';
//   console.log(iaName);
// }
// whoIsTheBestIA();
//
//  const sayHello = (name = "World") => console.log("Hello " + name);
//
// sayHello();
//
// const instructors = ['Usman', 'Marc', 'Alanoud'];
//
// for (let i = 0; i < instructors.length; i++) {
//   console.log(instructors[i]);
// }
// instructors.forEach(function(e,i){
//      console.log(i,e);
//
// });

//
// const friends = ["Mansour", "Munira", "Ahmed"];
// const friendsCopy = [friends];
//
// friends.forEach(function(i) {
//   console.log(`Hi ${i}`);
// });
//
//
// const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
// let total = 0;
//
// nums.forEach(function(i) {
//   total += i
// });
// console.log(total);
//
// const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
// var totalNumbersUnder4000 = 0;
// stringNumbers.forEach(function(i) {
//   let num = parseInt(i);
//   if (i < 4000) {
//     totalNumbersUnder4000 += num;
//   }
// });
//
// console.log(totalNumbersUnder4000);
// let arr = [1,2,3,4];
//
// let newArr = arr.map((v,i,a) => {
// return v % 2 === 0 ? v *2 :  v;
// });
//
// console.log(newArr);
//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//
// let times100 = nums.map(i => i * 100)
// console.log(times100);
//
//
// const iAS = ['alanoud', 'khalid', 'shaima', 'hakami'];
// // let capitalizedIAs = iAS.map()
//
//
// String.prototype.capitalize = function() {
//     return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
// };
//
// let capitalizedIA = iAS.map(i => i.capitalize())
// console.log(capitalizedIA);
//
// let capitalizedIAs = iAS.map(i => i.toUpperCase())
// console.log(capitalizedIAs);
//
//
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//
// let dayAbbreviations = days.map(i => i.substr(0,3));
// console.log(dayAbbreviations);
//


const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.map((v,i,a) => {
return v <= 2000 ? v : "" ;
});
console.log(century20);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums.filter( val => {
    return val % 3;
  });
console.log(result);

const names = ["Sara", "Abdulrahman", "Eman"];
let result1 = names.filter(s => { return s.toLowerCase().includes("a")
 });
 console.log(result1);


 let cities = years.filter(val => {
   return val <= 2000;
 });
 console.log(cities);

 const numsx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let sum = numsx.reduce((acc, val) => {
  return acc + val;
});
 console.log(sum);

 const numsa = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = numsa.reduce((acc, val) => {
 return acc + val;
});
console.log(total);


// const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
// let num= 0;
// var totalNumbersUnder4000 = stringNumbers.reduce((acc, val) => {
//   let x = parseInt(val);
//   if (x <= 4000) {
//     num += x;
//   }
// });
// console.log(num);


const products = [
  {name: 'flower vase', price: 75},
  {name: 'lamp', price: 85},
  {name: 'jar of honey', price: 95},
  {name: 'coil', price: 65},
  {name: 'lumber', price: 55}
];

var reformattedArray = products.map(obj => {
var rObj = {};
rObj  [obj.name] = obj.price / 2;
return rObj;
});
console.log(reformattedArray);
console.log(products);

var cheapProducts = products.filter(val => {
  return val.price <= 70;
});
console.log(cheapProducts);


let totalPrice =0;
totalPrice = products.reduce((acc, val) =>
  acc + val.price,0);
console.log(totalPrice);
