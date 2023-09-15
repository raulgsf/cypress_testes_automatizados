describe('Parceiro Frontend - Deve adicionar o tipo do pedido e alguma anotação', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoParceiro')
    const unidade = Cypress.env('tipoUnidadeParceiro')
    const quantidade = Cypress.env('quantidadeProdutoParceiro')
    const tipo = Cypress.env('tipoParceiroPerfilParceiro')
    const observacoes = Cypress.env('observacoesParceiro')

    it('Adiciona o tipo de pedido e alguma anotação', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('input[placeholder = "Buscar produtos"]').type(produto).type('{enter}')
        cy.wait(10000)

        cy.get('input[value = "0"]', { timeout: tempo }).type(quantidade)

        cy.contains(produto + ' adicionando ao carrinho', { timeout: tempo }).should('be.visible')

        cy.get('button[type = "button"]').contains('Fechar pedido', { timeout: tempo }).click()
        cy.wait(20000)

        cy.get('div[name = "1"]').type(tipo)
        cy.contains('div.css-1n1c5ok', tipo, { timeout: tempo }).click()

        cy.get('textarea[name = "2"]').type(observacoes)
        cy.get('button[type = "submit"]').contains('Confirmar', { timeout: tempo }).click()
    })
})