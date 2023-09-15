describe('Geral Frontend - Deve verificar as categorias da vitrine', () => {

    const url = Cypress.env('portalUrlFrontEnd')
    const tempo = Cypress.env('timeout')
    const grupo = Cypress.env('grupoCategorias')

    it('verifica categorias', () => {
        cy.visit(url)
        cy.get('button[type = "button"]', { timeout: tempo}).contains('Acessar vitrine de produtos').click()
        cy.wait(10000)

        cy.get('button[type = "button"]').contains('Todas as categorias').click()
        cy.get('p.css-y2t344').contains(grupo).click()
        cy.get('h5').contains(grupo).should('be.visible')
    })
})