/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
         cy.visit('https://ebac-jobs-e2e.vercel.app') // para visitar o site somente uma vez, sem a necessidade de repedição em cada it.
    })

    it('Deve renderizar 4 vagas', () => {
       cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
        
    })

    it('Deve filtrar fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
        
    })
})
