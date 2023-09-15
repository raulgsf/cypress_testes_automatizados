describe('Geral Frontend - Deve verificar os widgets das Marcas na vitrine', () => {

    const url = Cypress.env('portalUrlFrontEnd')
    const tempo = Cypress.env('timeout')

    it('verifica widget marcas da vitrine', () => {
        cy.visit(url)
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Acessar vitrine de produtos').click()
        cy.wait(10000)

        cy.get('div[data-index = 0]').eq(3).should('be.visible')
        cy.get('div[data-index = 1]').eq(1).should('be.visible')
        cy.get('div[data-index = 2]').eq(1).should('be.visible')
        cy.get('div[data-index = 3]').eq(1).should('be.visible')
        cy.get('div.css-wuw9o9').eq(6).click()
        cy.get('div[data-index = 4]').eq(1).should('be.visible')
        cy.get('div[data-index = 5]').eq(1).should('be.visible')
    })
})