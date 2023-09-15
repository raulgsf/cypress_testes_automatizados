describe('Parcerio Frontend - Deve verificar se os widgets das Marcas vieram', () => {

    const tempo = Cypress.env('timeout')

    it('teste resumo pedidos', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('.slick-track div[data-index = "0"]').eq(3).should('be.visible')
        cy.get('.slick-track div[data-index = "1"]').eq(1).should('be.visible')
        cy.get('.slick-track div[data-index = "2"]').eq(1).should('be.visible')
        cy.get('.slick-track div[data-index = "3"]').eq(1).should('be.visible')

        cy.get('div.css-wuw9o9').eq(4).click()
        cy.wait(5000)

        cy.get('.slick-track div[data-index = "4"]').eq(1).should('be.visible')
        cy.get('.slick-track div[data-index = "5"]').eq(1).should('be.visible')
    })
})