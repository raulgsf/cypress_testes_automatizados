describe('Parceiro - Deve ser capaz de pesquisar um registro no Financeiro', () => {

    const tempo = Cypress.env('timeout')
    const filtro = Cypress.env('criterioBuscaFinanceiro')

    it('Pesquisa registro', () => {
        cy.loginParceiro()
        cy.wait(20000)

        //acessa Financeiro
        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Financeiro').click()
        cy.wait(20000)

        cy.get('input[placeholder = "Buscar registros"]', { timeout: tempo }).type(filtro).type('{enter}')
        cy.get('div.css-y2t344', { timeout: tempo }).contains(filtro).should('be.visible')
    })
})