describe('Parceiro - Deve ser capaz de ver as todas notificações', () => {
    const tempo = Cypress.env('timeout')
    const nomeNotificacao = Cypress.env('nomeNotificacao')
    const descricaoNotificacao = Cypress.env('descricaoNotificacao')

    it('teste checar notificações', () => {
        cy.loginParceiro()
        cy.wait(30000)

        //acessa o "sino" de notifiacações
        cy.get('span.css-1rzb3uu', { timeout: tempo }).click()

        //acessa a pagina de notificações
        cy.get('button[type = "button"]').contains('Ver todas').click()

        //verifica se a pagina de notificações está visível
        cy.get('div.css-1esxkzb', { timeout: tempo }).contains(nomeNotificacao).click()
        cy.get('div.css-ww6ide', { timeout: tempo }).contains(descricaoNotificacao).should('be.visible')
        cy.get('h4.css-cv26lt').should('be.visible')
        cy.get('div.css-1m1voaz').should('be.visible')
    })
})