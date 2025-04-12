const buscar = $('#btn-buscar-cep')

$(document).ready(function () {

    $('#cep').mask('00000-000')

    $(buscar).click(function () {
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`

        $(buscar).find('i').addClass('d-none')
        $(buscar).find('span').removeClass('d-none')

        fetch(endpoint)
        .then(response => {
            return response.json()    
        })
        .then(data => {
            const logradouro = data.logradouro
            const bairro = data.bairro
            const cidade = data.localidade
            const estado = data.uf
            const endereco = `${logradouro}, ${bairro}, ${cidade} - ${estado}`
            $('#endereco').val(endereco)
        })
        .catch(error => {            
            alert('Erro ao buscar o endereço, tente novamente mais tarde!')
        })
        .finally(() => {
            setTimeout(() => {
                $(buscar).find('span').addClass('d-none')
                $(buscar).find('i').removeClass('d-none')
            })
        })        
    })    
})