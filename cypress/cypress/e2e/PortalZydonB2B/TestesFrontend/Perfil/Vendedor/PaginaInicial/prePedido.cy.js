describe('Vendedor Frontend - Deve efetuar oo pré-pedido', () => {

    const nomeParceiro = Cypress.env('nomeParceiroPerfilVendedor')
    const tipoParceiro = Cypress.env('tipoParceiroPerfilVendedor')
    const tempo = Cypress.env('timeout')

    it('pré-pedido', () => {
        cy.loginVendedor()
        cy.wait(20000)

        cy.get('input[type = "text"]').eq(0).type(nomeParceiro)
        cy.get('h6').contains(nomeParceiro).click()
        cy.get('input[type = "text"]').eq(1).type(tipoParceiro)
        cy.get('div').contains(tipoParceiro).click()
        cy.get('button[type = "submit"]').eq(0).click()
        cy.get('button.css-w5qhhs', { timeout: tempo }).should('be.visible')
    })
})