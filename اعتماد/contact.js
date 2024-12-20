let Name = document.getElementById("name-input")
let tel = document.getElementById("tel-input")
let email = document.getElementById("email-input")
let address = document.getElementById("address-input")
let send_btn = document.getElementById("send-btn")
let alert_name = document.getElementById("alert-name")
let alert_tel = document.getElementById("alert-tel")
let alert_email = document.getElementById("alert-email")
let alert_address = document.getElementById("alert-address")
let alert_success = document.getElementById("alert-success")
send_btn.addEventListener("click",()=>{
    let flag = true 
    if(Name.value == ""){
        alert_name.classList.remove("d-none")
        flag = false
    }
    else{
        alert_name.classList.add("d-none")
    }
    if(tel.value == ""){
        alert_tel.classList.remove("d-none")
        flag = false
    }
    else{
        alert_tel.classList.add("d-none")
    }
    if(address.value == ""){
        alert_address.classList.remove("d-none")
        flag = false
    }
    else{
        alert_address.classList.add("d-none")
    }
    if (!email.value.endsWith("@gmail.com")) {
        alert_email.classList.remove("d-none"); 
        flag = false    
    } 
    else if(email.value.length <16){
        alert_email.classList.remove("d-none"); 
        flag = false
    }
    else {
        alert_email.classList.add("d-none"); 
    }
    if(flag==true){
        alert_success.classList.remove("d-none")
    }
    else{
        alert_success.classList.add("d-none")
    }
})

