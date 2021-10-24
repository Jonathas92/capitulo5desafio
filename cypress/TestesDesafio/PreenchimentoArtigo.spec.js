/// <reference types="cypres" />

import Artigo  from '../support/pages/artigo'
describe('Artigo', () => {
    beforeEach(() => {
        
        cy.login()

        cy.visit('/')

    });
    it('Validação de um novo cadastro de artigo com sucesso', () => {
        
        // fluxo de criação de formulário
        Artigo.AcessarOForulario()

        //criação do formulário
        Artigo.preencherFormulario()

        //confirmar o formulário clicando no botão de confirmar
        Artigo.submeterFormulario()
        
        //verifica se o artigo foi criado.
        Artigo.VerificarArtigoCriado()
    });
});