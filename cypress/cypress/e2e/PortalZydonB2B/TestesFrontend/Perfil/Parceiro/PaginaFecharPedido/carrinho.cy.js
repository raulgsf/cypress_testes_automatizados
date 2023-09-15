describe('Parceiro Frontend - Deve ser capaz de remover/adicionar produtos ao carrinho enquando houver o Fechamneto do Pedido', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoParceiro')
    const unidade = Cypress.env('tipoUnidadeParceiro')
    const quantidade = Cypress.env('quantidadeProdutoParceiro')

    it('teste carrinho fechar pedido', () => {
        cy.loginParceiro()
        cy.wait(30000)

        //busca o produto e seta a unidade e quantidade
        cy.get('input[placeholder = "Buscar produtos"]', { timeout: tempo }).type(produto).type('{enter}')
        cy.wait(10000)

        cy.get('input[value = "0"]').type(quantidade)

        cy.contains(produto + ' adicionando ao carrinho', { timeout: tempo }).should('be.visible')

        //carrinho abre e avança para a próxima página
        cy.get('button[type = "button"]').contains('Fechar pedido', { timeout: tempo }).click()
        cy.wait(10000)

        cy.get('input[value = "' + quantidade + '"]').type('{backspace}', 1)
    })
})