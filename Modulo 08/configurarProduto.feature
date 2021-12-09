            #language: pt

            Funcionalidade: Configurar Produto

            Como cliente da EBAC SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que eu acesse a página da EBAC SHOP

            Cenário: Comprar um produto
            Quando eu selecionar o <produto>
            E a <cor>
            E o <tamanho>
            E a <quantidade>
            Então o <produto> deve ser exibido no carrinho com a <cor>, <tamanho> e <quantidade> selecionados

            Exemplos:
            | produto    | cor    | tamanho | quantidade |
            | "Camiseta" | "Azul" | "Médio" | 1          |

            Cenário: Validar mensagens de erro
            Quando eu selecionar o <produto>
            E a <cor>
            E o <tamanho>
            E a <quantidade>
            Então deve ser exibida a <mensagem>

            Exemplos:
            | produto    | cor    | tamanho | quantidade | mensagem                                    |
            | "Camiseta" |        | "Médio" | 1          | "Cor é obrigatório"                         |
            | "Camiseta" | "Azul" |         | 1          | "Tamanho é obrigatório"                     |
            | "Camiseta" | "Azul" | "Médio" |            | "Quantidade é obrigatório"                  |
            | "Camiseta" | "Azul" | "Médio" | 11         | "Somente são permitidos 10 itens por venda" |

            Cenário: Limpar a seleção de um produto
            Quando eu selecionar o <produto>
            E a <cor>
            E o <tamanho>
            E a <quantidade>
            E clicar no botão "Limpar"
            Então os dados selecionados deverão ser limpos

            Exemplos:
            | produto    | cor    | tamanho | quantidade |
            | "Camiseta" | "Azul" | "Médio" | 1          |




