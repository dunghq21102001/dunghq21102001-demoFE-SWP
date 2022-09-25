const registerForm = document.getElementById('registerForm');
const username = document.getElementById('register-userName');
const password = document.getElementById('register-password1');
const password2 = document.getElementById('register-password2');
const phoneNumber = document.getElementById('register-phoneNumber');

// username.onchange = function () {
//     checkRequired([username])
//     checkLength(username, 6, 255)
// }
// password.onchange = function () {
//     checkRequired([password])
//     checkLength(password, 6, 255)
// }
// password2.onchange = function () {
//     checkRequired([password2])
//     checkPasswordMatch(password, password2)
// }
// phoneNumber.onchange = function () {
//     checkRequired([phoneNumber])
//     checkPhoneNumber(phoneNumber)
// }
registerForm.addEventListener('submit', function (e) {
    e.preventDefault()
    checkRequired([username, password, password2, phoneNumber])
    checkLength(username, 1, 255)
    checkLength(password, 1, 255)
    checkPhoneNumber(phoneNumber)
    checkPasswordMatch(password, password2)
})

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSucces(input)
        }
    });
}

//check input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`)
    } else {
        showSucces(input)
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

// check phone number
function checkPhoneNumber(input) {
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (input.value.match(phone)) {
        return true
    } else {
        showError(input, `${getFieldName(input)} wrong!`)
        return false
    }
}






