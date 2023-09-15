describe('Parceiro - Deve ser capaz de adicionar um endereço durante o fechamento do Pedido', () => {

    const unidade = Cypress.env('tipoUnidadeParceiro')
    const produto = Cypress.env('nomeProdutoParceiro')
    const endereco = Cypress.env('enderecoEntregaParceiro')
    const tempo = Cypress.env('timeout')

    it('Deve verificar o endereço', () => {
        cy.loginParceiro()
        cy.wait(30000)

        //busca o produto e seta a unidade e quantidade
        cy.get('input[placeholder = "Buscar produtos"]').type(produto).type('{enter}')
        cy.wait(30000)

        cy.get('input[value = "0"]').type('10')

        cy.contains(produto + ' adicionando ao carrinho').should('be.visible')

        //carrinho abre e avança para a próxima página
        cy.get('button[type = "button"]').contains('Fechar pedido').click()

        //seta o endereco do usuário e verifica
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Alterar endereço de entrega').click()
        cy.get('input[placeholder = "Buscar endereço"]', { timeout: tempo }).type(endereco)
        cy.wait(10000)
        cy.get('h6.css-yemnbq').contains(endereco).click()
        cy.get('p.css-1o38g2n').contains(endereco).should('be.visible')
    })
})