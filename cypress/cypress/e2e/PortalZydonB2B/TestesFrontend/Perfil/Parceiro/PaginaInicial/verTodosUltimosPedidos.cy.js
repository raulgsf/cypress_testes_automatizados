describe('Parceiro Frontend - Deve verificar se o botão "Ver Todos" dos Últimos Pedidos na tela inicial está funcionando', () => {

    const tempo = Cypress.env('timeout')

    it('teste botão ver todos', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('a').contains('VER TODOS').eq(0).click()
        cy.get('h4', { timeout: tempo }).contains('Meus pedidos').should('be.visible')
    })
})