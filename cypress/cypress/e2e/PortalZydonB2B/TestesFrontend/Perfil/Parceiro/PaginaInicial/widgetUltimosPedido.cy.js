describe('Parceiro Frontend - Deve verificar se o resumo dos Últimos Pedidos vieram', () => {

    const tempo = Cypress.env('timeout')

    it('teste resumo últimos pedidos', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('.slick-track div[data-index = "0"]').eq(1).should('be.visible')
        cy.get('.slick-track div[data-index = "1"]').eq(0).should('be.visible')
        cy.get('.slick-track div[data-index = "2"]').eq(0).should('be.visible')

        cy.get('div.css-wuw9o9').eq(1).click()
        cy.wait(5000)
        cy.get('.slick-track div[data-index = "3"]').eq(0).should('be.visible')
        cy.get('.slick-track div[data-index = "4"]').eq(0).should('be.visible')
        cy.get('.slick-track div[data-index = "5"]').eq(0).should('be.visible')

        cy.get('div.css-wuw9o9').eq(2).click()
        cy.wait(5000)
        cy.get('.slick-track div[data-index = "6"]').eq(0).should('be.visible')
        cy.get('.slick-track div[data-index = "7"]').eq(0).should('be.visible')
        cy.get('.slick-track div[data-index = "8"]').eq(0).should('be.visible')
    })
})