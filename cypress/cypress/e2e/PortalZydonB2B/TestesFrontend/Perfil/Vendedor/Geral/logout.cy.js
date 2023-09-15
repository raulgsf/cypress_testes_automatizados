describe('Vendedor Frontend - Deve ser capaz de realizar logout', () => {
    const tempo = Cypress.env('timeout')

    it('test log out', () => {
        cy.loginVendedor()

        //acessa sair
        cy.get('button.css-w5qhhs', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains('Sair').click()
        
        //verifica se a logout funcionou
        cy.contains('button', 'Acessar').should('be.visible')
    })
})