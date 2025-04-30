### Exercício Módulo 10 - Plugins jQuery

```
    A entrega deste exercício consiste em deixar o projeto disponível no link do GitHub funcional, com:

    o carousel funcionando em slides;
    a validação;
    máscaras operativas.
```

## Dicas

- O carousel slick utiliza a ID do campo para atribuir funções. 
<p>    Corrigido alterando de: </P>

```
    $('#carousel').slick({
        autoplay: true,
        arrows: false
    })    
```

<p> para: </p>

```
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
```

- A semântica de escrita do HTML e jQuery utilizam o idioma inglês.

<p> Corrigido alterando 'mascara' e 'requerido' para 'mask' e 'required' respectivamente. </p>

- O jQuery plugin só executa depois que o jQuery carregar na página.

<p> Corrigido alterando de: </p>

```
    <script src="./js/jquery.mask.min.js"></script>
    <script src="./js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="./js/messages_pt_BR.min.js"></script>
    <script src="./js/main.js"></script>
```

<br> para: </p>

```
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="./js/jquery.mask.min.js"></script>
    <script src="./js/jquery.validate.min.js"></script>
    <script src="./js/messages_pt_BR.min.js"></script>
    <script src="./js/main.js"></script>  
```