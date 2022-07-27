// adding name in navbar
let loginData = JSON.parse(localStorage.getItem("loginData"));
document.querySelector("#user_name").textContent = loginData.name;
let newNumber;

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

document.getElementById("dis_btn").addEventListener("click",disFun);

function disFun(){
  
  let coupon = document.getElementById("coupon").value;

  if ( coupon === "yogi3000" ){

    alert("You can get 60% discount")

    let cartPrice = Number(total.textContent);
    // console.log(cartPrice)

    let disPrice = (cartPrice*60)/100;
    
    let discountSpan = document.getElementById("discountSpan");

    discountSpan.textContent = disPrice;
    
    let new_price = document.getElementById("new_price");

    new_price.textContent = "New Price: "+ Math.floor(cartPrice - disPrice);

    newNumber = Math.floor(cartPrice - disPrice);

    localStorage.setItem("cartMoney",JSON.stringify(Math.floor(cartPrice - disPrice)));
    
  }
  else{
    alert("Coupon code is invaild")
  }
}


// checkout functionality

let checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click", checkfun);



function checkfun(){
  if ( Number(total.textContent) === 0 ){
    alert ("Your cart is empty")
    return
  }

  JSON.stringify(newNumber) || localStorage.setItem("cartMoney",JSON.stringify(Number(total.textContent)))
  // console.log(Number(total.textContent))
  window.location.href = "checkout.html"
}