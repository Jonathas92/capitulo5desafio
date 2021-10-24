/// <reference types="cypress"/>

describe('Validacao_Login', () => {
    
    before(() =>{
        cy.visit('login')
    })
    it('Teste de validação se está passando o login, mas não está passando a senha.', () => {

        cy.request({
            url:'Request URL: https://api.realworld.io/api/users/login',
            method: 'POST',
            body:{
                "user": {
                    "email": "teste@mail.com"
                }
            },
            failOnStatusCode: false
        }).then(response =>{
            console.log(response.body.code)
        })
    });

    it('Teste de validação se a senha está sendo passado, mas o email está em branco', () => {

        cy.request({
            url:'Request URL: https://api.realworld.io/api/users/login',
            method: 'POST',
            body:{
                "user": {
                    "email": "",
                    "password": "123456"
                }
            },
            failOnStatusCode: false
        }).then(response =>{
            console.log(response.body)
        })
    });

    it('Teste de acesso realizado com sucesso.', () => {
        cy.request({
            url:'https://api.realworld.io/api/users/login',
            method:'POST',
            body:{
                    "user": {
                      "email": "testecadastrodesafio@mail.com",
                      "password": "123456"
                    }
            }
        }).then(response =>{
            console.log(response.body.user.token)

            window.localStorage.setItem('jwtToken',response.body.user.token)
        })
        cy.visit('/')
        cy.contains('No articles are here... yet.').should('be.visible')
    });

    
});