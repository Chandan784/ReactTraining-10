// fetch("https://jsonplaceholder.typicode.com/user")
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

// let heading = document.querySelector("#heading");

// heading.style.color = "green";
// heading.style.fontSize = "100px";
// heading.style.backgroundColor = "black";

//

fetch("https://fakestoreapi.com/products")
  .then((resData) => {
    return resData.json();
  })
  .then((data) => {
    console.log(data);

    let body = document.querySelector("body");

    data.forEach((element) => {
      //   let productTitle = document.createElement("h1");
      //   productTitle.innerText = `${element.title}`;
      //   console.log(productTitle);

      let productPhoto = document.createElement("img");
      productPhoto.src = `${element.image}`;
      console.log(productPhoto);

      body.appendChild(productPhoto);
    });
  });
