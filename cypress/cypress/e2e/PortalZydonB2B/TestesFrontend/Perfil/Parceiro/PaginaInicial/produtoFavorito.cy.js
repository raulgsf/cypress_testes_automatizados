describe('Parceiro Frontend - Deve ser capaz de verificar o Produto Favorito', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoFavoritoParceiro')

    it('teste verifica produto favorito', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('input[placeholder = "Buscar produtos"]').type(produto).type('{enter}')
        cy.wait(15000)
        cy.get('h6').contains(produto).should('be.visible')
        cy.get('input[type = "checkbox"]').click()
        cy.wait(5000)
        cy.get('a[tabindex = 0]').eq(0).click()
        cy.wait(2500)
        cy.get('button[type = "button"]').contains('Favoritos').click()
        cy.contains(produto, { timeout: tempo })
        cy.get('.css-1bkokf5').contains(produto).click()
        cy.get('.css-idnud input[type = "checkbox"]').click()
    })
})