$(document).ready(function(){    
    $('header button').click(function(){ 
        $('form').slideDown()
    })
    
    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(event){
        event.preventDefault()
        const nomeTarefa = $('#nome-tarefa').val()
        const novaTarefa = $('<li></li>').text(nomeTarefa)
        $(novaTarefa).appendTo('ol')        
        $('#nome-tarefa').val('')
    })

    $('ol').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through')
    })
})
