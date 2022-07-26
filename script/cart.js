// adding name in navbar
let loginData = JSON.parse(localStorage.getItem("loginData"));
document.querySelector("#user_name").textContent = loginData.name;


// cart functaility start from here

let cartData = JSON.parse(localStorage.getItem("cartArr")) || [];

let total = document.querySelector("#span");



// adding all product

function display(cartData) {
  
  let sum = 0;
  
  document.querySelector(".container").innerHTML = "";

  cartData.forEach(function (elem,index) {

    sum += Number(elem.price)

    let product = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.img;

    let brand = document.createElement("h1");
    brand.textContent = elem.brand;

    let price = document.createElement("p");
    price.textContent = elem.price;

    let catagory = document.createElement("p");
    catagory.textContent = elem.catagory;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Item";

    deleteBtn.addEventListener("click",function(){
        deleteItem(index)
    })

    product.append(img, brand, price, catagory, deleteBtn);
    let container = document.querySelector(".container");

    container.append(product);
  });

  total.textContent = sum;
}
display(cartData);


// deleting product

function deleteItem(index){
    
  // console.log(index);
  cartData.splice(index,1);

  localStorage.setItem("cartArr",JSON.stringify(cartData))
  display(cartData);  
}


// discount functionality

