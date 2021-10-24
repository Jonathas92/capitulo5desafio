const el = require('./elements').ELEMENTS

const nomeArtigo = 'Artigo de testes' + new Date().getTime()

class Artigo {
    //Fluxo de criacao do artigo
    AcessarOForulario(){
        cy.get(el.linkNovoArtigo).click()
    }

    //Preenchedo um Formulário
    preencherFormulario(){

        cy.get(el.inputTitle).type(nomeArtigo)
        cy.get(el.inputDescription).type('Teste automatizado de preenchimento de um artigo')
        cy.get(el.inputBody).type('Teste de preenchimento de um artigo de testes')
        cy.get(el.inputTags).type('cypress Agileizei')
    }

    //Confirmando o formulário
    submeterFormulario(){
        cy.contains('button','Publish Article').click()
    }

    VerificarArtigoCriado(){
        cy.get('h1').should('have.text', nomeArtigo)
    }
}

export default new Artigo()