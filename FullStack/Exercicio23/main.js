const buscar = $('#btn-buscar-cep')

$(document).ready(function () {

    $('#cep').mask('00000-000')

    $(buscar).click(function () {
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`

        $(buscar).find('i').addClass('d-none')
        $(buscar).find('span').removeClass('d-none')

        $.ajax(endpoint).done(function (resposta) {
            const logradouro = resposta.logradouro
            const bairro = resposta.bairro
            const cidade = resposta.localidade
            const estado = resposta.uf
            const endereco = `${logradouro}, ${bairro}, ${cidade} - ${estado}`
            $('#endereco').val(endereco)

            $(buscar).find('span').addClass('d-none')
            $(buscar).find('i').removeClass('d-none')
        })   
    })    
})