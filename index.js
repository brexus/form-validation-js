const form = document.getElementById("form");

const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmailName = document.getElementById("email");
const inputCountryName = document.getElementById("country");
const inputZipCodeName = document.getElementById("zip-code");
const inputPasswordName = document.getElementById("password");
const inputConfirmPasswordName = document.getElementById("confirm-password");

const submit = document.getElementById("submit");

const firstNameRegExp = /^[a-zA-Z]*$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipCodeRegExp = /^[0-9][0-9]-[0-9][0-9][0-9]$/;

// Minimum osiem znaków, co najmniej jedna litera i jedna cyfra:
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



const isValidFirstName = () => 
    (inputFirstName.value.trim().length > 0) && (firstNameRegExp.test(inputFirstName.value));


const isValidLastName = () => 
    (inputLastName.value.trim().length > 0) && (firstNameRegExp.test(inputLastName.value));

const isValidEmail = () => 
    (inputEmailName.value.trim().length > 0) && (emailRegExp.test(inputEmailName.value))


const isValidCountry = () => 
    inputCountryName.value.trim().length > 0;


const isValidZipCode = () => 
    (inputZipCodeName.value.trim().length > 0) && (zipCodeRegExp.test(inputZipCodeName.value));


const isValidPassword = () => 
    (inputPasswordName.value.trim().length > 0) && (passwordRegExp.test(inputPasswordName.value));


const isValidConfirmPassword = () => 
    isValidPassword() && (inputPasswordName.value === inputConfirmPasswordName.value);


inputFirstName.addEventListener("input", () => {
    let isValid = isValidFirstName();
    const error = document.querySelector(".error-first-name");

    if( !isValid ) {
        inputFirstName.className = "invalid";
        showError(error);
    } else {
        inputFirstName.className = "valid";
        removeError(error);
    }
});

inputLastName.addEventListener("input", () => {
    let isValid = isValidFirstName();
    const error = document.querySelector(".error-last-name");

    if( !isValidLastName() ) {
        inputLastName.className = "invalid";
        showError(error);
    } else {
        inputLastName.className = "valid";
        removeError(error);
    }
});

inputEmailName.addEventListener("input", () => {
    let isValid = isValidEmail();
    const error = document.querySelector(".error-email");

    if( !isValid ) {
        inputEmailName.className = "invalid";
        showError(error);
    } else {
        inputEmailName.className = "valid";
        removeError(error);
    }
});

inputCountryName.addEventListener("input", () => {
    let isValid = isValidCountry();
    const error = document.querySelector(".error-country");

    if( !isValid ) {
        inputCountryName.className = "invalid";
        showError(error);
    } else {
        inputCountryName.className = "valid";
        removeError(error);
    }
});

inputZipCodeName.addEventListener("input", () => {
    let isValid = isValidZipCode();
    const error = document.querySelector(".error-zip-code");
    
    if( !isValid ) {
        inputZipCodeName.className = "invalid";
        showError(error);
    } else {
        inputZipCodeName.className = "valid";
        removeError(error);
    }
});

inputPasswordName.addEventListener("input", () => {
    let isValid = isValidPassword();
    const error = document.querySelector(".error-password");

    if( !isValid ) {
        inputPasswordName.className = "invalid";
        showError(error);
    } else {
        inputPasswordName.className = "valid";
        removeError(error);
    }
});

inputConfirmPasswordName.addEventListener("input", () => {
    let isValid = isValidConfirmPassword();
    const error = document.querySelector(".error-confirm-password");

    if( !isValid ) {
        inputConfirmPasswordName.className = "invalid";
        showError(error);
    } else {
        inputConfirmPasswordName.className = "valid";
        removeError(error);
    }
});

const showError = (error) => {
    error.innerText = "Invalid value!";
};

const removeError = (error) => {
    error.innerText = "";
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = () => isValidFirstName() && 
                        isValidLastName() && 
                        isValidEmail() &&
                        isValidCountry() &&
                        isValidZipCode() &&
                        isValidPassword() &&
                        isValidConfirmPassword();

    (isValid()) ? alert("Correct validation :)") : alert("Invalid validation :(");
});
