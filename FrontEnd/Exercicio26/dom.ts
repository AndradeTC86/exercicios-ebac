const campoNome = document.getElementById("nome")

const formulario = document.getElementsByTagName("form")[0]

const botaoEnviar = document.getElementById("enviar")

botaoEnviar?.addEventListener('click', (evento: MouseEvent) => {
    evento.preventDefault()
})