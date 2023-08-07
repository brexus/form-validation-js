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
    (inputFirstName.value.trim().length > 0) && (firstNameRegExp.test(inputFirstName.value));

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

    if( !isValid ) {
        inputFirstName.className = "invalid";
    } else {
        inputFirstName.className = "valid";
    }
});

inputLastName.addEventListener("input", () => {
    let isValid = isValidFirstName();

    if( !isValid ) {
        inputLastName.className = "invalid";
    } else {
        inputLastName.className = "valid";
    }
});

inputEmailName.addEventListener("input", () => {
    let isValid = isValidEmail();

    if( !isValid ) {
        inputEmailName.className = "invalid";
    } else {
        inputEmailName.className = "valid";
    }
});

inputCountryName.addEventListener("input", () => {
    let isValid = isValidCountry();

    if( !isValid ) {
        inputCountryName.className = "invalid";
    } else {
        inputCountryName.className = "valid";
    }
});

inputZipCodeName.addEventListener("input", () => {
    let isValid = isValidZipCode();

    if( !isValid ) {
        inputZipCodeName.className = "invalid";
    } else {
        inputZipCodeName.className = "valid";
    }
});

inputPasswordName.addEventListener("input", () => {
    let isValid = isValidPassword();

    if( !isValid ) {
        inputPasswordName.className = "invalid";
    } else {
        inputPasswordName.className = "valid";
    }
});

inputConfirmPasswordName.addEventListener("input", () => {
    let isValid = isValidConfirmPassword();

    if( !isValid ) {
        inputConfirmPasswordName.className = "invalid";
    } else {
        inputConfirmPasswordName.className = "valid";
    }
});



form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = () => isValidFirstName() && 
                        isValidLastName() && 
                        isValidEmail() &&
                        isValidCountry() &&
                        isValidZipCode() &&
                        isValidPassword() &&
                        isValidConfirmPassword();

    (isValid()) ? alert("brawo ty") : alert("zjeb");
});
