const form = document.getElementById("form");

const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmailName = document.getElementById("email");
const inputCountryName = document.getElementById("country");
const inputZipCodeName = document.getElementById("zip-code");
const inputPasswordName = document.getElementById("password");
const inputConfirmPasswordName = document.getElementById("confirm-password");

const submit = document.getElementById("submit");

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValid = false;


inputFirstName.addEventListener("input", () => {
    if( !inputFirstName.value.trim().length > 0 ) {
        inputFirstName.className = "invalid";
    } else {
        inputFirstName.className = "valid";
    }
});

inputLastName.addEventListener("input", () => {
    if( !inputLastName.value.trim().length > 0 ) {
        inputLastName.className = "invalid";
    } else {
        inputLastName.className = "valid";
    }
});

inputEmailName.addEventListener("input", () => {
    if( !(inputEmailName.value.trim().length > 0) || !(emailRegExp.test(inputEmailName.value)) ) {
        inputEmailName.className = "invalid";
    } else {
        inputEmailName.className = "valid";
    }
});

inputCountryName.addEventListener("input", () => {
    if( !inputCountryName.value.trim().length > 0 ) {
        inputCountryName.className = "invalid";
    } else {
        inputCountryName.className = "valid";
    }
});

inputZipCodeName.addEventListener("input", () => {
    if( !inputZipCodeName.value.trim().length > 0 ) {
        inputZipCodeName.className = "invalid";
    } else {
        inputZipCodeName.className = "valid";
    }
});

inputPasswordName.addEventListener("input", () => {
    if( !inputPasswordName.value.trim().length > 0 ) {
        inputPasswordName.className = "invalid";
    } else {
        inputPasswordName.className = "valid";
    }
});

inputConfirmPasswordName.addEventListener("input", () => {
    if( !inputConfirmPasswordName.value.trim().length > 0 ) {
        inputConfirmPasswordName.className = "invalid";
    } else {
        inputConfirmPasswordName.className = "valid";
    }
});



submit.addEventListener('click', () => {

});