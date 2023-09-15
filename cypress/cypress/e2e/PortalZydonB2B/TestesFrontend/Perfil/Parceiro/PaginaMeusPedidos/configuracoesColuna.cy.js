describe('Parceiro Frontend - Deve ser capaz de ver as configurações das Colunas', () => {

    const tempo = Cypress.env('timeout')
    const criterio = Cypress.env('configuracaoColunaMeusPedidos')

    it('Deve clicar nos 3 pontos da coluna e escolher alguma ação', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Meus pedidos').click()
        cy.wait(10000)

        cy.get('button[aria-label = "Colunas"]').eq(0).invoke('css', 'visibility', 'visible').click({ force: true})
        cy.get('.css-juqb2d').contains('Fixar na esquerda').should('be.visible')
        cy.get('.css-juqb2d').contains('Fixar na direita').should('be.visible')
        cy.get('.css-juqb2d').contains('Filtrar').should('be.visible')
        cy.get('.css-juqb2d').contains('Agrupar por Nro. Único').should('be.visible')
        cy.get('.css-juqb2d').contains('Ocultar coluna').should('be.visible')
        cy.get('.css-juqb2d').contains('Gerenciar colunas').should('be.visible')
        cy.get('.css-juqb2d').contains(criterio).click()
    })
})