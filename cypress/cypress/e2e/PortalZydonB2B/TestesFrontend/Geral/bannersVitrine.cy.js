describe('Geral Frontend - Deve verificar se os banners vieram', () => {

    const url = Cypress.env('portalUrlFrontEnd')
    const tempo = Cypress.env('timeout')

    it('Verifica banners', () => {
        cy.visit(url)
        cy.get('button[type = "button"]', { timeout: tempo }).contains('Acessar vitrine de produtos', { timeout: tempo }).click()
        cy.wait(10000)
        //banner principal
        cy.get('div[data-index = 0]').eq(0).should('have.css', 'height', '183.9166717529297px')
        cy.get('div[data-index = 0]').eq(0).should('have.css', 'width', '935px')
        //mini banner
        cy.get('div.css-rtktw0').should('have.css', 'height', '124px')
        cy.get('div.css-rtktw0').should('have.css', 'width', '935.3333740234375px')
        //banner secudário
        cy.get('div[data-index = 0]').eq(2).should('have.css', 'height', '133.08334350585938px')
        cy.get('div[data-index = 0]').eq(2).should('have.css', 'width', '935px')
    })
})