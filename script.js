const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input')
const emailInput = document.getElementById('email') 
const emailError = document.getElementById('email-error') 

const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 

form.addEventListener('submit', validateForm) 

function validateForm(e){
    e.preventDefault()
    if(checkError()){
        setTimeout(() => form.reset(), 1500)
    } 
}

function checkError(){

let noErrors = true 

inputs.forEach((input) => {
    if(input.value === ''){
        input.classList.add('error') 
        noErrors = false 
    } else{
        input.classList.remove('error') 
        noErrors = true
    }
})

if(emailInput.value !== '' && !emailInput.value.match(validEmail))
{
    emailInput.classList.add('error') 
    emailError.innerText = 'Looks like this is not an email' 
    noErrors = false 
} else if(emailInput.value === '' && emailInput.value.match(validEmail)){
    emailInput.classList.add('error')
    emailError.innerText = 'Email cannot be empty' 
    noErrors = false 
}

return noErrors 
}

