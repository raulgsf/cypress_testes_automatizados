describe('Parceiro Frontend - Deve verificar se o botão "Ver Todos" do Compre Novamente na tela inicial está funcionando', () => {

    const tempo = Cypress.env('timeout')

    it('teste botão ver todos', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('a.css-16luo0l').eq(1).click()
        cy.get('h5', { timeout: tempo }).contains('Compre novamente').should('be.visible')
    })
})