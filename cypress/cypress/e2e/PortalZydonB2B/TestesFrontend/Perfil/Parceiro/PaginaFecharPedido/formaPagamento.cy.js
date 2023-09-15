describe('Parceiro Frontend - Deve adicionar/alterar a forma de pagamento', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoParceiro')
    const unidade = Cypress.env('tipoUnidadeParceiro')
    const quantidade = Cypress.env('quantidadeProdutoParceiro')
    const pagamento = Cypress.env('tipoPagamentoParceiro')

    it('teste adicionar/alterar forma de pagamento', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('input[placeholder = "Buscar produtos"]').type(produto).type('{enter}')
        cy.wait(10000)

        cy.get('input[value = "0"]').type(quantidade)

        cy.contains(produto + ' adicionando ao carrinho', { timeout: tempo }).should('be.visible')

        cy.get('button[type = "button"]').contains('Fechar pedido', { timeout: tempo }).click()
        cy.wait(10000)

        cy.get('button[type = "button"]').contains('Alterar forma de pagamento').click()
        cy.get('input[placeholder = "Buscar forma de pagamento"]').type(pagamento)
        cy.get('h6.css-9tkf2q').contains(pagamento, { timeout: tempo }).click()
        cy.get('div.css-lwhy1m').contains(pagamento, { timeout: tempo }).should('be.visible')
    })
})