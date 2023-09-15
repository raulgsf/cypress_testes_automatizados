describe('Geral Frontend - Deve ir para a tela de login da tela de vitrine', () => {

    const url = Cypress.env('portalUrlFrontEnd')
    const tempo = Cypress.env('timeout')

    it('deve clicar no botão de login enquanto está na vitrine', () => {
        cy.visit(url)
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Acessar vitrine de produtos').click()
        cy.wait(10000)
        cy.get('button[type = "button"]').contains('Fazer login').click()
        cy.get('button[type = "submit"]').should('be.visible')
    })
})