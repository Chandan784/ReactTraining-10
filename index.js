// var num = 2;

// {
//   let x = 2;

//   console.log(x);
//   console.log(num);
// }

// if (1) {
//   var x = 4;
//   let y = 3;
// }

// /console.log(y);

// function hii() {
//   var num2 = 5;
// }

// console.log(num2);

// const x = 4;

// x = 5;
// let x = true;

// console.log(typeof x);

// let age = 12;

// if (age > 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can not vote");
// }

// let fullMark = 600;
// let mark = 200;
// if (mark > 300) {
//   console.log("A");
// } else if (mark > 200) {
//   console.log("B");
// } else if (mark > 150) {
//   console.log("C");
// } else {
//   console.log("fail");
// }

// if (1) {
//   if (0) {
//     if (1) {
//     } else {
//     }
//   } else {
//     console.log("hiii");
//   }
// } else {
// }

// for (let x = 1; x < 11; x++) {
//   console.log(x);
// }

// let x = 1;

// while (x < 11) {
//   console.log(x);
//   x++;
// }

// let x = 1;

// do {
//   console.log(x);
//   x++;
// } while (x > 11);

// let dayNum = 4;

// switch (dayNum) {
//   case 0:
//     console.log("sunday");

//     break;
//   case 1:
//     console.log("Monday");

//     break;
//   case 2:
//     console.log("tue");

//     break;
//   case 3:
//     console.log("wed");

//     break;
//   case 4:
//     console.log("thur");

//     break;
//   case 5:
//     console.log("fri");

//     break;
//   case 6:
//     console.log("sat");

//     break;

//   default:
//     console.log("invalid");
// }
//function creation
// function addNum() {
//   let x = 4;
//   let y = 5;
//   console.log(x + y);
// }

// addNum();
// addNum();
// addNum();
//parameter
// function addNum(x, y) {
//   console.log(x + y);
// }
//function argument
// addNum(4, 8);
// addNum(10, 10);
// addNum(20, 1000);

//function with return
// function greeting(name) {

//   return `hello ${name}`;
//   //string template
// }

// let result = greeting("akash");

// console.log(result);

// function akash() {
//   var x = 2;

//   {
//     console.log(x);
//   }
// }

// akash();

// console.log(x);

//arrow function

// function addNum(a, b) {
//   console.log(a + b);
// }

// let addNum = (a, b) => {
//   console.log(a + b);
// };

// let addNum = (a => console.log(a);

// addNum(10);

// function getSqr(num) {
//   return num * num;
// }

// console.log(getSqr(10));

// console.log(ans);

// let getSqr = (num )=> num*num

// let value = getSqr(10);
// console.log(value);

// function functionName (){

// }

//  let fun1  =   function x(){
//   console.log("x");

// }

// function fun2(fun){
// fun()
// }

// fun2(fun1)

//string

// let fullName = "akash";

// console.log(typeof fullName);

// // let x = 10;
// // let y = "10";

// // console.log(x != y);

// console.log(fullName[1]);

// let x = 10;
// let y = "10";
// y = Number(y);
// console.log(x + y);

// let x = 10;

// let name = "akash";

// console.log(`my name is ${name}`);

// let fullName = " chandan ";

// // console.log(fullName.split("a"));
// console.log(fullName.length);
// let newString = fullName.trim();
// console.log(newString.length);

// console.log(fullName.charAt(2));
// console.log(fullName.indexOf("a"));

//array

// let numbers = [2, 4, 6, 7, 8, 9];

// console.log(numbers.length - 1);

// let students = ["akash", "vikash", "chandan"];

// console.log(numbers[numbers.length - 1]);

// console.log(students[2]);

// console.log(numbers);

//set data to array by index
// numbers[1] = 8;

// console.log(numbers);

// let nums = [1, 4, 6, 7];
// nums.push(10);

// console.log(nums);

// nums.pop();

// console.log(nums);

// nums.shift();
// console.log(nums);

// nums.unshift(11);
// console.log(nums);

// let students = ["chandan", "ramesh", "akash"];

// for (let student of students) {
//   console.log(student);
// }

// for (let index in students) {
//   //   console.log(index);
//   console.log(students[index]);
// }

// let numbers = [2, 4, 65, 7, 8];

// let newaaray = numbers.slice(4);

// console.log(newaaray);

// console.log(numbers);

// let studentsAge = [20, 24, 30, 44];

// let result = studentsAge.map((element, index) => {
//   return element;
// });

// // console.log(result);

// let scores = [100, 200, 400, 300, 50, 500];

// let results = scores.filter((e) => {
//   return e > 300;
// });

// console.log(results);

//array destrcture

// let marks = [200, 440, 300];

// let mark1 = marks[0];
// console.log(mark1);

// let mark2 = marks[1];
// let mark3 = marks[2];

// let [mark1, , mark3] = marks;

// console.log(mark3);

// let students = ["cahndan", "akash", "vikash"];

// //object

// let student1 = {
//   name: "akash",
//   age: 24,
//   roll: 100,
// };

// let productA = {
//   title: "iphone",
//   description: "this is a product",
//   price: 5000,
// };

// let productB = {
//   title: "samsung",
//   description: "this is a product",
//   price: 8000,
// };
//get the data
// console.log(productB.title);
//set the data
// productB.title = "xiomi";

// console.log(productB);
//computed properties
// let name = "x";
// let student = {
//   [name]: "chandan",
//   age: 25,
// };
// console.log(student[name]);

// object destructure

// let product = {
//   title: "computer",
//   features: ["good camera", "8gb ram", "256gb sorage"],
//   price: 3000,
// };

// let x = product.title;
// let price = product.price;
// console.log(x, price);

// let { title:xyz } = product;

// console.log(xyz);

let products = [
  {
    title: "computer",
    features: ["good camera", "8gb ram", "256gb sorage"],
    price: 3000,
  },
  {
    title: "pc",
    features: ["good camera", "8gb ram"],
    price: 6000,
  },
  {
    title: "phone",
    features: ["8gb ram", "256gb sorage"],
    price: 10000,
  },
];

let result = products.filter((product) => {
  return product.price > 5000;
});

console.log(result);
