            #language: pt

            Funcionalidade: Tela de cadastro - Checkout

            Como cliente da EBAC-SHOP
            Quero fazer concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que eu esteja na página de checkout

            Cenário: Cadastrar usuário válido
            Quando eu informar o <nome>
            E o <sobrenome>
            E o <pais>
            E o <endereco>
            E o <cidade>
            E o <cep>
            E o <telefone>
            E o <email>
            Entao o usuário deve ser cadastrado corretamente

            Exemplos:
            | nome     | sobrenome | pais     | endereco            | cidade           | cep         | telefone      | email                   |
            | "Thiago" | "Andrade" | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" | "31998877665" | "andrade-tc@uol.com.br" |

            Cenário: Validar mensagens de erro
            Quando eu informar o <nome>
            E o <sobrenome>
            E o <pais>
            E o <endereco>
            E o <cidade>
            E o <cep>
            E o <telefone>
            E o <email>
            Entao deve ser exibida <mensagem>

            Exemplos:
            | nome     | sobrenome | pais     | endereco            | cidade           | cep         | telefone      | email                   | mensagem                                |
            | "Thiago" | "Andrade" | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" | "31998877665" | "andrade-tc"            | "E-mail deve possuir um formato válido" |
            |          | "Andrade" | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" | "31998877665" | "andrade-tc@uol.com.br" | "Nome deve ser informado"               |
            | "Thiago" |           | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" | "31998877665" | "andrade-tc@uol.com.br" | "Sobrenome deve ser informado"          |
            | "Thiago" | "Andrade" |          | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" | "31998877665" | "andrade-tc@uol.com.br" | "País deve ser informado"               |
            | "Thiago" | "Andrade" | "Brasil" |                     | "Belo Horizonte" | "30000-000" | "31998877665" | "andrade-tc@uol.com.br" | "Endereço deve ser informado"           |
            | "Thiago" | "Andrade" | "Brasil" | "Rua de Teste, 100" |                  | "30000-000" | "31998877665" | "andrade-tc@uol.com.br" | "Cidade deve ser informada"             |
            | "Thiago" | "Andrade" | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" |             | "31998877665" | "andrade-tc@uol.com.br" | "CEP deve ser informado"                |
            | "Thiago" | "Andrade" | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" |               | "andrade-tc@uol.com.br" | "Telefone deve ser informado"           |
            | "Thiago" | "Andrade" | "Brasil" | "Rua de Teste, 100" | "Belo Horizonte" | "30000-000" | "31998877665" |                         | "E-mail deve ser informado"             |