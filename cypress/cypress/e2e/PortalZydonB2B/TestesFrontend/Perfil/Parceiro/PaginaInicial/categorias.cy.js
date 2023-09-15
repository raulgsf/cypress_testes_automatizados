describe('Parceiro Frontend - Deve verificar se as categorias estão funcionando', () => {

    const tempo = Cypress.env('timeout')
    const grupo = Cypress.env('grupoCategorias')

    it('teste categorias', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('.css-wodwcl').click()
        cy.get('p.css-y2t344').contains(grupo).click()

        cy.wait(10000)
        cy.get('h5.css-1dg2jyp', { timeout: tempo }).contains(grupo).should('be.visible')
    })
})