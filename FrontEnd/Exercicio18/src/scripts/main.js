document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteio').addEventListener('submit', function (event) {
        event.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)
        
        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor(numeroAleatorio + 1)
        
        document.getElementById('numero-sorteado').innerText = numeroAleatorio
        document.querySelector('.resultado-sorteio').style.display = 'block'
    })
})