describe('Parceiro Frontend - Deve verificar se o botão "Ver Todos" das Marcas está funcionando', () => {

    const tempo = Cypress.env('timeout')

    it('teste botão ver todos', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('a.css-16luo0l').eq(2).click()
        cy.get('h5', { timeout: tempo }).contains('Os mais comprados').should('be.visible')
    })
})