async function getProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();

  console.log(data);

  let parentDiv = document.querySelector(".parent");

  data.forEach((product) => {
    let productCard = document.createElement("div");

    productCard.classList.add("product-card");

    let productImage = document.createElement("img");
    productImage.setAttribute("id", "product-img");
    productImage.src = `${product.image}`;

    let productTitle = document.createElement("h1");
    productTitle.setAttribute("id", "title");
    productTitle.textContent = `${product.title}`;

    let productDescription = document.createElement("h2");
    productDescription.setAttribute("id", "description");
    productDescription.textContent = `${product.description}`;

    let productRating = document.createElement("p");
    productRating.setAttribute("id", "rating");
    productRating.textContent = `${product.rating.rate}`;

    let productprice = document.createElement("p");
    productprice.setAttribute("id", "price");
    productprice.textContent = `${product.price}`;

    // let productPrice = document.querySelector("#price");
    // let productDescription = document.querySelector("#description");
    // let productRating = document.querySelector("#rating");
    productCard.append(productImage);
    productCard.append(productTitle);
    productCard.append(productDescription);
    productCard.append(productprice);
    productCard.append(productRating);

    parentDiv.append(productCard);
  });
}

getProducts();
