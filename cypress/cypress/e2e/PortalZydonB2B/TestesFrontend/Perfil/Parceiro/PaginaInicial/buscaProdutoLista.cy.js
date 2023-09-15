describe('Parcerio Frontend - Deve ser capaz de verificar se o Produto buscado pelo usuário apareceu na busca', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoParceiro')

    it('teste busca produto', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('input[placeholder = "Buscar produtos"]').type(produto).type('{enter}')
        cy.get('h6', { timeout: tempo }).contains(produto).should('be.visible')
    })
})