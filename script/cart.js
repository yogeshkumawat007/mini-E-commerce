// adding name in navbar
let loginData = JSON.parse(localStorage.getItem("loginData"));
document.querySelector("#user_name").textContent = loginData.name;


// cart functaility start from here

let cartData = JSON.parse(localStorage.getItem("cartArr")) || [];

let total = document.querySelector("#span");
let sum = 0;





// adding all product

function display(cartData) {
  
  cartData.forEach(function (elem) {
    let product = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.img;

    let brand = document.createElement("h1");
    brand.textContent = elem.brand;

    let price = document.createElement("p");
    price.textContent = elem.price;

    let catagory = document.createElement("p");
    catagory.textContent = elem.catagory;

    let button = document.createElement("button");
    button.textContent = "Delete Item";

    button.addEventListener("click",function(){
        deleteItem(elem)
    })

    product.append(img, brand, price, catagory, button);
    let container = document.querySelector(".container");

    container.append(product);


    // adding total cart value
    sum += +(elem.price)
    // console.log("sum: ",typeof sum, sum)
    total.textContent = sum
  });
}
display(cartData);

// deleting product

function deleteItem(elem){
    
}

