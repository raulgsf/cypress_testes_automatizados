describe('Parceiro - Deve ser capaz de alterar a densidade que mostrará os registros do Meues Pedidos', () => {

    const tempo = Cypress.env('timeout')
    const densidade = Cypress.env('densidadeRegistros')
    const tamanho = Cypress.env('tamanhoDensidadeRegistros')

    it('Deve alterar a densidade que os registros serão vizualizados', () => {

        cy.loginParceiro()
        cy.wait(20000)
        //acessa Financeiro
        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Meus pedidos').click()

        cy.wait(15000)
        //altera a densidade dos registros
        cy.get('button[aria-label = "Density"]', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains(densidade).click()

        //verifica se foi alterado
        cy.get('div[style = "max-height: ' + tamanho + 'px; min-height: ' + tamanho + 'px;"]', { timeout: tempo }).should('be.visible')
    })
})