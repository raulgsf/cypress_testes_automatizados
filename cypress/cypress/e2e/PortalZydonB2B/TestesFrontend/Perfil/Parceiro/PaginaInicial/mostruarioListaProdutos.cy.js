describe('Parceiro Frontend - Deve verificar as formas de mostruário do Produto como card, tabela e lista', () => {

    const tempo = Cypress.env('timeout')

    it('teste mostruário', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('tr.css-1stnzi4').should('have.css', 'height', '79px')
        cy.get('tr.css-1stnzi4').should('have.css', 'width', '1105.2083740234375px')

        cy.get('div[aria-label = "Lista"]').click()
        cy.wait(5000)
        cy.get('div.css-gu0kfs').should('have.css', 'height', '224px')
        cy.get('div.css-gu0kfs').should('have.css', 'width', '935.3333740234375px')

        cy.get('div[aria-label = "Card"]').click()
        cy.wait(5000)
        cy.get('div.css-1v7s0as').should('have.css', 'height', '315.8333435058594px')
        cy.get('div.css-1v7s0as').should('have.css', 'width', '215.83334350585938px')

        cy.get('div[aria-label = "Tabela"]').click()
    })
})