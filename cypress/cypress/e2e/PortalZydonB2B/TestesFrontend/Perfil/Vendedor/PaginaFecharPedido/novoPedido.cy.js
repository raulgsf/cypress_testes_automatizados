describe('Vendedor - Deve realizar um Novo Pedido', () => {

    const parceiro = Cypress.env('nomeParceiroPerfilVendedor')
    const tipo = Cypress.env('tipoParceiroPerfilVendedor')
    const produto = Cypress.env('nomeProdutoVendedor')
    const unidade = Cypress.env('tipoUnidadeVendedor')
    const quantidade = Cypress.env('qunatidadeProdutoVendedor')
    const endereco = Cypress.env('enderecoEntregaVendedor')
    const pagamento = Cypress.env('tipoPagamentoVendedor')
    const observacoes = Cypress.env('observacoesVendedor')
    const desconto = Cypress.env('quantidadeDesconto')
    const tempo = Cypress.env('timeout')

    it('Deve fazer um Novo Pedido', () => {

        cy.loginVendedor()

        //seta o parceiro e o tipo do pedido e avança para a próxima pagina
        cy.wait(20000)
        cy.get('div[name = "1"]', { timeout: tempo }).type(parceiro)
        cy.contains('h6.css-ll3zvr', parceiro).click()

        cy.get('div[name = "2"]').type(tipo)
        cy.contains('div.css-1n1c5ok', tipo).click()

        cy.get('button[type = "submit"]').contains('Próximo passo').click()
        cy.wait(10000)

        //busca o produto desejado seta o tipo de unidade, quantidade do mesmo e avança para a próxima pagina
        cy.get('input[placeholder = "Buscar produtos"]', { timeout: tempo }).type(produto).type('{enter}')

        cy.get('input[value = "' + unidade + '"]', { timeout: tempo }).type('{selectall}{backspace}').type(unidade)
        cy.get('input[value = "0"]').type('{selectall}{backspace}').type('10')

        cy.contains(produto + ' adicionando ao carrinho', { timeout: tempo }).should('be.visible')
        cy.get('button.css-la9n59').click()

        cy.get('button[type = "button"]').contains('Fechar pedido', { timeout: tempo }).click()

        //seta o endereco do usuário e verifica-o
        cy.get('button[type = "button"]').contains('Selecionar um endereço de entrega', { timeout: tempo }).click()
        cy.get('input[placeholder = "Buscar endereço"]').type(endereco)
        cy.wait(10000)
        cy.get('h6.css-yemnbq').contains(endereco, { timeout: tempo }).click()
        cy.get('p.css-1o38g2n').contains(endereco, { timeout: tempo }).should('be.visible')

        //seta a forma de pagamento e verifica
        cy.get('button[type = "button"]').contains('Selecionar uma forma de pagamento', { timeout: tempo }).click()
        cy.get('input[placeholder = "Buscar forma de pagamento"]').type(pagamento)
        cy.get('h6.css-9tkf2q').contains(pagamento, { timeout: tempo }).click()
        cy.get('div.css-lwhy1m').contains(pagamento, { timeout: tempo }).should('be.visible')

        //adiciona observacoes
        cy.get('textarea[name = "1"]').type(observacoes)
        cy.get('button[type = "submit"]').contains('Confirmar', { timeout: tempo }).click()

        //fecha o pedido
        cy.get('button[type = "button"]').contains('Fechar pedido', { timeout: tempo }).click()

        //verifica se o pedido foi feito
        cy.get('button[type = "button"]').contains('Novo pedido', { timeout: tempo }).should('be.visible')
    })
})