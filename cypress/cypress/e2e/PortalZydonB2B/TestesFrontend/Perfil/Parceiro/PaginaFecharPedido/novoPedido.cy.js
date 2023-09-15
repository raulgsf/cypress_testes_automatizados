describe('Parceiro - Deve realizar um Novo Pedido', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('nomeProdutoParceiro')
    const unidade = Cypress.env('tipoUnidadeParceiro')
    const quantidade = Cypress.env('quantidadeProdutoParceiro')
    const endereco = Cypress.env('enderecoEntregaParceiro')
    const pagamento = Cypress.env('tipoPagamentoParceiro')
    const tipo = Cypress.env('tipoParceiroPerfilParceiro')
    const observacoes = Cypress.env('observacoesParceiro')

    it('Deve fazer um Novo Pedido', () => {
        cy.loginParceiro()
        cy.wait(30000)

        //busca o produto e seta a unidade e quantidade
        cy.get('input[placeholder = "Buscar produtos"]', { timeout: tempo }).type(produto).type('{enter}')
        cy.wait(10000)

        cy.get('input[value = "0"]').type(quantidade)

        cy.contains(produto + ' adicionando ao carrinho', { timeout: tempo }).should('be.visible')

        //carrinho abre e avança para a próxima página
        cy.get('button[type = "button"]').contains('Fechar pedido', { timeout: tempo }).click()

        //seta o endereco do usuário e verifica
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Alterar endereço de entrega').click()
        cy.get('input[placeholder = "Buscar endereço"]').type(endereco)
        cy.wait(10000)
        cy.get('h6.css-yemnbq').contains(endereco, { timeout: tempo }).click()
        cy.get('p.css-1o38g2n').contains(endereco, { timeout: tempo }).should('be.visible')

        //seta a forma de pagamento e verifica
        cy.get('button[type = "button"]').contains('Alterar forma de pagamento').click()
        cy.get('input[placeholder = "Buscar forma de pagamento"]').type(pagamento)
        cy.get('h6.css-9tkf2q').contains(pagamento, { timeout: tempo }).click()
        cy.get('div.css-lwhy1m').contains(pagamento, { timeout: tempo }).should('be.visible')
        cy.wait(10000)

        //seta o tipo de pedido
        cy.get('div[name = "1"]').type(tipo)
        cy.contains('div.css-1n1c5ok', tipo, { timeout: tempo }).click()

        //adicionar observacoes
        cy.get('textarea[name = "2"]').type(observacoes)
        cy.get('button[type = "submit"]').contains('Confirmar', { timeout: tempo }).click()

        //fecha o pedido
        cy.wait(7500)
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Fechar pedido', { timeout: tempo }).click()

        //verifica se o pedido foi feito
        cy.get('button[type = "button"]').contains('Novo pedido', { timeout: tempo }).should('be.visible')
    })
})