import './style.css';
import countries from "countries-list";
import zipit from "zip-it";

  const form = document.getElementById('form');
  const formElements = document.getElementById('form').elements;
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const zipcode = document.getElementById('zipcode');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('passwordconfirm');
  const usernameError = document.querySelector('#username + span.error');
  const emailError = document.querySelector('#email + span.error');
  const zipcodeError = document.querySelector('#zipcode + span.error');
  const passwordError = document.querySelector('#password + span.error');
  const passwordConfirmError = document.querySelector('#passwordconfirm + span.error');
  const button = document.getElementById('button');

  const countryCodes = Object.keys(countries.countries);
  countryCodes.forEach(element => {
    const countrySelection = document.createElement('option');
    countrySelection.value = element;
    countrySelection.textContent = element;
    document.getElementById('country').appendChild(countrySelection);
  });

  username.addEventListener('input', function(e) {
    if (username.validity.tooShort) {
        usernameError.textContent = "*Please enter 2 or more characters";
        username.style.border = "1px solid red";
    } else if (username.validity.patternMismatch) {
        usernameError.textContent = "*Please do not use special characters";
        username.style.border = "1px solid red";
    } else {
    usernameError.textContent = "";
    username.style.border = "";
    }
  })

  email.addEventListener('input', function(e) {
    if (email.validity.patternMismatch) {
        emailError.textContent = "*Please use proper email format";
        email.style.border = "1px solid red";
    } else {
        emailError.textContent = "";
        email.style.border = "";
    }
  })

  zipcode.addEventListener('input', function(e) {
    const countryCode = document.getElementById('country').value
    if (zipit.verifyCode(countryCode, zipcode.value) === false) {
        zipcodeError.textContent = "*Please use correct postal code";
        zipcode.style.border = "1px solid red";
    } else {
        zipcodeError.textContent = "";
        zipcode.style.border = "";
    }
  })

  password.addEventListener('input', function(e) {
    if (password.validity.tooShort) {
        passwordError.textContent = "*Please enter at least 8 characters";
        password.style.border = "1px solid red";
    } else {
        passwordError.textContent = "";
        password.style.border = "";
    }
  })

  form.addEventListener('submit', function(e) {
    for (let i = 0; i < formElements.length; i++) {
          const formName = formElements[i].id;
          if (formElements[i].id === "passwordconfirm") {
              if (passwordConfirm.value !== password.value) {
                passwordConfirmError.textContent = '*Passwords do not match';
                passwordConfirm.style.border="1px solid red";
            } else {
                passwordConfirmError.textContent = '';
                password.style.border = "1px solid green";
                passwordConfirm.style.border=" 1px solid green";
            }
        } else if (formElements[i].value === "") {
            const errorSpan = document.querySelector(`#${formName} + span.error`)
            formElements[i].style.border = "1px solid red";
            errorSpan.textContent = `*Please enter valid ${formName}`
            formElements[i].focus();
            e.preventDefault();
            break;
        } else {
          if (formElements[i].id !== "button") {
            formElements[i].style.border = "1px solid green";
            e.preventDefault();
          }
        }
    }
})


