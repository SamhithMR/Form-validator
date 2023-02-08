let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");
let submitButton = document.querySelector(".submit");
let nameInputLabel = document.querySelector('.ic1 label');
let emailInputLabel = document.querySelector('.ic2 label');
let passwordInputLabel = document.querySelector('.ic3 label');
let cPasswordInputLabel = document.querySelector('.ic4 label');
let label = document.querySelectorAll('label')

submitButton.addEventListener("click", () => (validateForm()));

function validateForm() {
    clearAllLabels();
    let isValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword();
    if (isValid) {
        document.querySelector(".signed").style.visibility = 'visible'
    }
}

// clear all the values of lable
function clearAllLabels() {
    label.forEach((x) => {
        x.innerHTML = '';
        x.style.visibility = 'hidden';
    });
}

function validateName() {
    if (!userName.value) {
        nameInputLabel.textContent = `Name must not be empty`;
        nameInputLabel.style.visibility = `visible`;
        return false;
    } else {
        // check if the name contains only lowerCase, UpperCase, space and underscore
        const regex = /^[a-zA-Z\s-]+$/;
        if (!regex.test(userName.value)) {
            nameInputLabel.textContent = `The name can only contain letters, spaces, and hyphens`;
            nameInputLabel.style.visibility = `visible`;
            return false;
        }
    }
    return true;
}

function validateEmail() {
    if (!email.value) {
        emailInputLabel.innerHTML = `Email must not be empty`;
        emailInputLabel.style.visibility = `visible`
        return false;
    } else {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // Consist of one or more word characters (\w), which can include letters, digits, and underscores. This part of the pattern is repeated one or more times with the possibility of a dot (.) or a dash (-) in between.
        // Have an at symbol (@)
        // Followed by another series of word characters and optional dots or dashes.
        // End with one or more instances of a dot followed by two to three word characters (the domain name extension)

        if (!emailRegex.test(email.value)) {
            emailInputLabel.innerHTML = `Enter a valid email`;
            emailInputLabel.style.visibility = `visible`
            return false;
        }
    }
    return true;
}

function validatePassword() {
    if (!password.value) {
        passwordInputLabel.textContent = "Password must not be empty";
        passwordInputLabel.style.visibility = "visible";
        return false;
    } else {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        // (?=.*[a-z]): Matches a lowercase letter
        // (?=.*[A-Z]): Matches an uppercase letter
        // (?=.*[0-9]): Matches a number
        // (?=.*[!@#\$%\^&\*]): Matches a special character from the list
        // (?=.{8,}): Matches a minimum length of 8 characters
        // $: Matches the end of a line.
        if (!passwordRegex.test(password.value)) {
            passwordInputLabel.textContent = "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character and must be at least 8 characters long";
            passwordInputLabel.style.visibility = "visible";
            return false;
        }
        return true;
    }
}

function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
        cPasswordInputLabel.textContent = "confirm password must match the password";
        cPasswordInputLabel.style.visibility = "visible";
        return false;
    }
    return true
}