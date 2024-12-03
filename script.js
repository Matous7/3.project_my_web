const form = document.querySelector(".form")
const fullName = document.querySelector(".full-name")
const password = document.querySelector(".password")
const passwordCheck = document.querySelector(".password-check")
const phoneNumber = document.querySelector(".telephone-number")
const checkFormBox = document.querySelector(".check-form-box")
const arrowUp = document.querySelector(".arrow-up")
const checkForm = document.querySelector(".check-form")

const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");
const hamburgerIcon = menuIcon.querySelector(".fa-bars");
const closeIcon = menuIcon.querySelector(".fa-xmark");

const modeContainer = document.querySelector(".mode-container");
const body = document.body;
const modeIcon = document.querySelector(".mode-container i");

// CHECKING FORM FOR VALID INFO
form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkForm.textContent = ""

    if (fullName.value === "" || password.value === "" || passwordCheck.value === "" || phoneNumber.value === "") {
        checkForm.textContent = "Všechna pole nejsou vyplněna!";
        checkFormBox.style.display = "block"
        return;
    }

    if (password.value !== passwordCheck.value) {
        checkForm.textContent = "Hesla se neshodují!";
        checkFormBox.style.display = "block";
        return; 
    }

    const phonePattern = /^\+420 \d{3} \d{3} \d{3}$/;
    if (!phonePattern.test(phoneNumber.value)) {
        checkForm.textContent = "Telefonní číslo není ve správném formátu!";
        checkFormBox.style.display = "block";
        return; 
    }

    checkForm.textContent = "Objednávka úspěšně dokončena!";
    checkForm.style.color = "green";
    checkFormBox.style.display = "block";
})


// NAVBAR HAMBURGER x XMARK
menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");

    if (hamburgerIcon.style.display === "none") {
        hamburgerIcon.style.display = "block";  
        closeIcon.style.display = "none";      
    } else {
        hamburgerIcon.style.display = "none";  
        closeIcon.style.display = "block"; 
    }
});


// SCROLL TO TOP
arrowUp.addEventListener("click", () => {
    window.scrollTo({ top: 0});
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100){
        arrowUp.style.visibility = "visible";  
        arrowUp.style.opacity = "1";  
    } else {
        arrowUp.style.visibility = 'hidden';  
        arrowUp.style.opacity = "0";  
    }
});


// LIGHT AND DARK MODE
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light");
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
} else {
    body.classList.remove("light");
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
}

modeContainer.addEventListener("click", () => {
    const isLightMode = body.classList.contains("light");

    if (isLightMode) {
        body.classList.remove("light");
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark"); 
    } else {
        body.classList.add("light");
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light"); 
    }
});
