describe('Geral Frontend - Deve verificar a paginação da vitrine', () => {

    const url = Cypress.env('portalUrlFrontEnd')
    const tempo = Cypress.env('timeout')

    it('deve verificar a paginacao', () => {
        cy.visit(url)
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Acessar vitrine de produtos').click()
        cy.wait(10000)

        cy.get('button[aria-label = "page 1"]').should('be.visible')
        cy.get('button[aria-label = "Go to page 2"]').click()
        cy.get('button[aria-label = "page 2"]').should('be.visible')
    })
})