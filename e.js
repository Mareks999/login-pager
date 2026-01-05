function validate() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

   
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

  
    if (!email.includes("@")) {
        emailError.textContent = "Nepareizs epasta formāts";
        valid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent =
            "Parolei jābūt vismaz 8 rakstzīmēm, ar 1 lielo burtu, 1 ciparu un 1 speciālo simbolu";
        valid = false;
    }

    if (valid) {
        alert("Veiksmīgi!");
    }
}
