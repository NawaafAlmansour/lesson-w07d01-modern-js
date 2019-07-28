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


const friends = ["Mansour", "Munira", "Ahmed"];
const friendsCopy = [friends];

 friends.forEach(function(i){
console.log(`Hi ${i}`);
});


const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

nums.forEach(function(i){ total += i});
console.log(total);

const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
var totalNumbersUnder4000 = 0;
stringNumbers.forEach(function(i){  let num = parseInt(i); if( i < 4000) {totalNumbersUnder4000 +=  num; } });

console.log(totalNumbersUnder4000);
