let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-pass");
let form = document.querySelector("#form");




form.addEventListener("submit", () => {
    
    if (confirmPassword.value !== password.value){
        event.preventDefault();
        alert("Passwords do NOT match.");
    }
    
})