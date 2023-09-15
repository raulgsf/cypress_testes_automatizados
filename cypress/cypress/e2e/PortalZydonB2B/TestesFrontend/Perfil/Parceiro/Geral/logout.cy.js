describe('Parceiro Frontend - Deve ser capaz de realizar logout', () => {
    const tempo = Cypress.env('timeout')

    it('test log out', () => {
        cy.loginParceiro()
        cy.wait(30000)
        //acessa sair
        cy.get('button.css-w5qhhs', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains("Sair").click()
        
        //verifica se o logout funcionou
        cy.contains('button', 'Acessar').should('be.visible')
    })
})