describe('Parceiro Frontend - Deve verificar se os banners apareceram', () => {

    const tempo = Cypress.env('timeout')

    it('teste banners', () => {
        cy.loginParceiro()
        cy.wait(30000)
        //banner principal
        cy.get('div[data-index = 0]').eq(0).should('have.css', 'height', '160.58334350585938px')
        cy.get('div[data-index = 0]').eq(0).should('have.css', 'width', '935px')
        //mini banner
        cy.get('div.css-rtktw0').should('have.css', 'height', '124px')
        cy.get('div.css-rtktw0').should('have.css', 'width', '935.3333740234375px')
        //banner secudário
        cy.get('div[data-index = 0]').eq(2).should('have.css', 'height', '116.41667175292969px')
        cy.get('div[data-index = 0]').eq(2).should('have.css', 'width', '935px')
    })
})