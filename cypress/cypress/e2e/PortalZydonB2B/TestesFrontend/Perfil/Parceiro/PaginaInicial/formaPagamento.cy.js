describe('Parceiro Frontend - Deve ser capaz de alterar a Forma De Pagamento pela Página Inicial', () => {

    const tempo = Cypress.env('timeout')
    const pagamento = Cypress.env('tipoPagamentoParceiro')

    it('deve alterar a forma de pagamento', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('p').contains('Forma de pagamento').click()
        cy.get('input[placeholder = "Buscar forma de pagamento"]').type(pagamento, '{enter}')
        cy.get('h6').contains(pagamento).click()
        cy.get('p').contains(pagamento).should('be.visible')
    })
})