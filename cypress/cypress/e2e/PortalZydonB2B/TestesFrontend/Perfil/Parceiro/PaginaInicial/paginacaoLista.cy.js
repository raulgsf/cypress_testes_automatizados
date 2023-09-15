describe('Parceiro Frontend - Deve verificar a paginação dos produtos', () => {

    const tempo = Cypress.env('timeout')
    const codigo = Cypress.env('codigoProdutoInicial')

    it('teste deve verificar paginação', () => {
        cy.loginParceiro()
        cy.wait(30000)
        cy.get('button[aria-label = "Go to page 2"]').click()
        cy.get('button[aria-label = "page 2"]', { timeout: tempo }).should('be.visible')
    })
})