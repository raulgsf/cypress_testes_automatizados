describe('Parceiro Frontend - Deve verificar se os widgets na página inicial dos Últimos Pedidos levam ao Detalhe do Pedido', () => {

    const tempo = Cypress.env('timeout')
    const codigo = Cypress.env('codigoWidgetDetalhePedido')

    it('teste detalhe do pedido página inicial', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('p.css-1mbpqil').contains(codigo).click()
        cy.wait(10000)
        cy.get('h4.css-sko12q', { timeout: tempo }).contains('Detalhe do pedido').should('be.visible')
        cy.get('h6.css-1rukwjf').contains('Resumo').should('be.visible')
        cy.get('h6.css-1hh1x3y').contains('Informações do pedido').should('be.visible')
        cy.get('h6.css-1hh1x3y').contains('Endereço de entrega').should('be.visible')
        cy.get('h6.css-118ukcd').contains('Itens do pedido').should('be.visible')
        cy.get('h6.css-cgnvoe').contains('Financeiro').should('be.visible')
    })
})