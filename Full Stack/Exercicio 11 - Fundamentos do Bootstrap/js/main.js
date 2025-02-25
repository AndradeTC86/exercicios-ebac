$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        }
    })
})


