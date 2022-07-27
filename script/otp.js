let form = document.querySelector("form");
let cartData = [];
let cartmoney = 0;

form.addEventListener("submit",function(event){
    event.preventDefault();

    let opt = form.opt.value;

    if ( opt == "1234" ){

        localStorage.setItem("cartArr",JSON.stringify(cartData))
        localStorage.setItem("cartMoney",JSON.stringify(cartmoney))


        alert("Your Order is succesfully placed")
        alert("You will get Your Products in 24 Hours")
        window.location.href = "index.html"
    }

    else{
        alert("Please Enter correct OTP")
    }
})