describe('Vendedor Frontend - Deve verificar se a categoria está aparecendo', () => {

    const nomeParceiro = Cypress.env('nomeParceiroPerfilVendedor')
    const tipoParceiro = Cypress.env('tipoParceiroPerfilVendedor')
    const tempo = Cypress.env('timeout')
    const grupo = Cypress.env('grupoCategorias')

    it('verifica categoria', () => {
        cy.loginVendedor()
        cy.wait(20000)

        cy.get('input[type = "text"]').eq(0).type(nomeParceiro)
        cy.get('h6').contains(nomeParceiro).click()
        cy.get('input[type = "text"]').eq(1).type(tipoParceiro)
        cy.get('div').contains(tipoParceiro).click()
        cy.get('button[type = "submit"]').eq(0).click()
        cy.wait(15000)

        cy.get('div').contains('Todas as categorias').click()
        cy.get('a[aria-label = "' + grupo + '"]').eq(1).click()
        cy.get('h5', { timeuot: tempo }).contains(grupo).should('be.visible')
    })
})