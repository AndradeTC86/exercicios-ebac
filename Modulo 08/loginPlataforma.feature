            #language: pt

            Funcionalidade: Login na Plataforma

            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse a página da EBAC SHOP

            Cenário: Autenticação válida
            Quando eu digitar o usuário "andrade-tc@uol.com.br"
            E a senha "senha123"
            Então deve direcionar para a tela de checkout

            Cenário: Autenticação inválida
            Quando eu digitar o <usuario>
            E a <senha>
            Então deve exibir a mensagem "Usuário ou senha inválidos"

            Exemplos:
            | usuario                      | senha      |
            | "emailinvalido@invalido.com" | "teste123" |
            | "andrade-tc@yol.com.br"      | "senha456" |