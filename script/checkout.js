let form = document.querySelector("form")

let cartmoney = Number(JSON.parse(localStorage.getItem("cartMoney")))

let checkPrice = document.getElementById("checkPrice");

checkPrice.textContent = cartmoney;
// console.log(cartMoney);


form.addEventListener("submit",function(event){
    event.preventDefault();

    alert("Opt Send to Your Mobile Number")
    window.location.href = "otp.html"
})

