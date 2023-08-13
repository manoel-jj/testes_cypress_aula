/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {

    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app') // para visitar o site somente uma vez, sem a necessidade de repedição em cada it.
   })

    it('Deve levar o usuarioo até o o formulario de inscrição ', () => {
        
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7) //o que se espera que aconteça
        cy.screenshot('tela-inscricao')
       
        
     
})
    
    it('Deve prencher formulario', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click() //.first() é utilizado para selecionar um novo elemento
        cy.get('input[name="nome-completo"]').type('manoel jailton')
        cy.get('input[name="email"]').type('manoeljailton@teste.com')
        cy.get('input[name="telefone"]').type('79 99779789')
        cy.get('input[name="endereco"]').type('rua tal. bairro tal')
        cy.get('#linux').check()  //para checkbox
        cy.get('select[name="escolaridade"]').select('outros') // para selecionar deve se usar o selector 
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!') // só é um teste quando se espera algo e testa 
        })

        cy.screenshot('tela-inscricao-preenchido')

    })
   
})
