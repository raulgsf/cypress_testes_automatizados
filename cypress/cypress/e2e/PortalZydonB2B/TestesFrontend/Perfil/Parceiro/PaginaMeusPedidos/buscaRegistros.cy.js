describe('Parceiro Frontend - Deve buscar um registro na página Meus pedidos', () => {

    const tempo = Cypress.env('timeout')
    const filtro = Cypress.env('criterioBuscaMeusPedidos')

    it('teste busca registro', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Meus pedidos').click()
        cy.wait(20000)

        cy.get('input[placeholder = "Buscar registros"]', { timeout: tempo }).type(filtro).type('{enter}')
        cy.get('div.css-y2t344', { timeout: tempo }).contains(filtro).should('be.visible')
    })
})