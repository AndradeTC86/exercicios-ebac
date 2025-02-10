const form = document.getElementById('form-validador')
let primeiroNumero = document.getElementById('primeiro-numero')
let segundoNumero = document.getElementById('segundo-numero')
const containerMessage = document.getElementById('message')

let formValido = false

form.addEventListener('submit', function(event){
    event.preventDefault()
    let formValido = validadorNumero()
    containerMessage.classList.remove('success-message', 'error-message')

    if (formValido){
        containerMessage.innerHTML = `O número ${segundoNumero.value} é maior que o número ${primeiroNumero.value}`
        containerMessage.classList.add('success-message')
        containerMessage.style.display = 'block'
    }
    else{
        containerMessage.innerHTML = `Atenção. O número ${primeiroNumero.value} não pode ser maior que o número ${segundoNumero.value}`
        containerMessage.classList.add('error-message')
        containerMessage.style.display = 'block'
    }
})

function validadorNumero(){
    return segundoNumero.value > primeiroNumero.value
}