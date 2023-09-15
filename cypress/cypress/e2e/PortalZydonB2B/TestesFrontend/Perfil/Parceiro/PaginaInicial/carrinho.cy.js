describe('Parceiro Frontend - Deve fazer a verificação dos produtos no carrinho', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoCarrinhoParceiro')
    const unidade = Cypress.env('tipoUnidadeCarrinhoParceiro')
    const quantidade = Cypress.env('quantidadeCarrinhoParceiro')

    it('teste carrinho', () => {
        cy.loginParceiro()
        cy.wait(30000)
        cy.get('input[placeholder = "Buscar produtos"]').type(produto).type('{enter}')

        cy.get('input[value = "0"]').type(quantidade)

        cy.contains(produto + ' adicionando ao carrinho', { timeout: tempo }).should('be.visible')
    })
})