describe('Parceiro Frontend - Deve verificar os Produtos Mais Vendidos', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoMaisVendidoParceiro')

    it('verifica mais vendidos', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('.css-1v7s0as').contains('Solvente Industrial').should('be.visible')
        cy.get('.css-16luo0l').eq(1).click()

        cy.wait(10000)
        cy.contains(produto).should('be.visible')
    })
})