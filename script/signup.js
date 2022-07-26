let form = document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signupData")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();

    let obj = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
    }

    if ( obj.name === "" || obj.email === "" || obj.password === ""){
        alert("Please fill all input feilds")
        return
    }

    signupLS.push(obj);
    localStorage.setItem("signupData",JSON.stringify(signupLS))

    console.log(signupLS)
})