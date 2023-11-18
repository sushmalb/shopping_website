let elements = document.getElementsByClassName("nav-text");
console.log(elements);

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseover", function () {
    this.style.color = "green"; // Use "this" to refer to the current element
  });
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseout", function () {
    this.style.color = "black"; // Use "this" to refer to the current element
  });
}

let head1 = document.getElementsByClassName("welcome-tags-li");
console.log(elements);

for (let i = 0; i < head1.length; i++) {
  head1[i].addEventListener("mouseover", function () {
    this.style.color = "#ff91a4"; // Use "this" to refer to the current element
  });
}

for (let i = 0; i < head1.length; i++) {
  head1[i].addEventListener("mouseout", function () {
    this.style.color = "white"; // Use "this" to refer to the current element
  });
}

const container = document.querySelector(".card-container");
const products = [];
async function fetchProductDeatails() {
  //
  const response = await fetch("http://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  products.forEach((el) => {
    const product = document.createElement("article");
    product.classList.add("card");
    product.innerHTML = `
    <div class="section">
    <img src="${el.thumbnail}">
    <div class="inner-card">
    <h2>${el.title} </h2>
    <p> ${el.description}</p>
    <p>$${el.price}</p>
    <button>Add to Cart</button>
    </div>
    </div>
  
`;

    container.appendChild(product);
  });

  //   const productArr = data.products;
  //   productArr.map((elements) => {
  //     container.innerHTML =
  //       container.innerHTML +
  //       `
  //     <div class="card-heading">${elements.title}</div>
  //     <div class="card-body">${elements.description}</div>

  //     `;
  //   });

  //
}
fetchProductDeatails();

function createProduct() {
  const container = document.querySelector(".product-list");
}

//
// const html = `
// <div class="card">
//         <img src="" alt="">
//         <div class="details">
//          <p class="type"></p>
//           <h3 class="desc">${products[0].title}</h3>
//           <p class="stars"></p>
//           <h3 class="price"></h3>

//         </div>
// </div>

// `;

// container.insertAdjacentHTML("beforeend", html);
