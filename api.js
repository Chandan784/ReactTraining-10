// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resData) => {
//     console.log(resData);
//     return resData.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("hii");

async function getUserData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();
  console.log(data);
}

getUserData();

console.log("hlw");

// let heading = document.querySelector("#heading");

// heading.style.color = "green";
// heading.style.fontSize = "100px";
// heading.style.backgroundColor = "black";

//

// fetch("https://fakestoreapi.com/products")
//   .then((resData) => {
//     return resData.json();
//   })
//   .then((data) => {
//     console.log(data);

//     let body = document.querySelector("body");

//     data.forEach((element) => {
//       //   let productTitle = document.createElement("h1");
//       //   productTitle.innerText = `${element.title}`;
//       //   console.log(productTitle);

//       let productPhoto = document.createElement("img");
//       productPhoto.src = `${element.image}`;
//       console.log(productPhoto);

//       body.appendChild(productPhoto);
//     });
//   });

// function fun1() {
//   console.log("i am fun1");
// }

// function fun2(fun) {
//   console.log(fun);

//   fun();
// }

// fun2(fun1);

// function addTwoNum(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNum(10, 20);

// function funA() {
//   console.log("funA");
//   function funB() {
//     console.log("funB");
//   }
//   funB();
// }

// funA();

// new Promise((res, rej) => {
//   //   res("chandan");
//   rej("something went wrong");
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
