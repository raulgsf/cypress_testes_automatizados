describe('Vendedor Frontend - Deve ser capaz de obter os dados da FAQ', () => {
    const tempo = Cypress.env('timeout')
    const fraseFAQ = Cypress.env('FAQVendedor')
    const categoriaFAQ = Cypress.env('categoriaFAQVendedor')

    it('test common questions', () => {
        cy.loginVendedor()

        //acessa perguntas frequentes
        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Perguntas frequentes').click()

        //seta a categoria que o usuário deseja
        cy.get('.css-xmbju9 input[type = "text"]', { timeout: tempo }).type(categoriaFAQ).type('{enter}')
        cy.get('div.css-1n1c5ok').contains(categoriaFAQ).click()

        //busca oque o usuário deseja
        cy.get('input[placeholder = "Buscar"]').type(fraseFAQ).type('{enter}')

        //verifica se o que foi digitado acima está visível^
        cy.contains('h6.css-1qgtvlr', fraseFAQ).should('be.visible')

        //verifica se a ajuda solicitada na pergunta acima foi mostrada
        cy.get('div.css-17yu73e').click()
        cy.get('p.css-1nawuqt').should('be.visible')
    })
})