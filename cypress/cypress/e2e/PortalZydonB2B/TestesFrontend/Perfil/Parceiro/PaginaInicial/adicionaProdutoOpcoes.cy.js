describe('Parceiro Frontend - Deve adicionar um produto com opções pela Página Inicial pela lista de produtos', () => {

    const tempo = Cypress.env('timeout')
    const produto = Cypress.env('produtoAdicionaLista')
    const unidade = Cypress.env('tipoUnidadeAdicionaLista')

    it('teste adiciona produto com opções via lista', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('h6.css-1drgn39').contains(produto).click()
        cy.wait(5000)
        cy.get('.css-1s5md62 .css-b95f0i .css-13tjsxv .css-xmbju9 input[value = "PACOTE"]').click()
        cy.wait(10000)
        cy.get('p.css-1g3ok63').contains(unidade).click()
        cy.wait(5000)
        cy.get('.css-1s5md62 .css-b95f0i .css-3g5fac input[value = 0]').type(10)
        cy.get('div[id = "notistack-snackbar"]', { timeout: tempo}).contains(produto + ' adicionando ao carrinho').should('be.visible')
    })
})