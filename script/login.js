let form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault();

    let signupLS = JSON.parse(localStorage.getItem("signupData")) || [];

    let obj = {
        email: form.email.value,
        password: form.password.value,

    }

    
    if ( obj.name === "" || obj.email === "" || obj.password === ""){
        alert("Please fill all input feilds")
        return
    }

    if ( signupLS.length === 0 ){
        alert("No users till Now")
        return
    }

    let isLoggedIn = false;

    signupLS.forEach(function(elem){
        if ( elem.email === obj.email && elem.password === obj.password ){
            
            localStorage.setItem("loginData",JSON.stringify(elem))
            alert("Login successful")
            isLoggedIn = true
            window.location.href = "index.html"
            return
        }
    })

    if (isLoggedIn === false){

        alert("User does not Exist")    
    }
})