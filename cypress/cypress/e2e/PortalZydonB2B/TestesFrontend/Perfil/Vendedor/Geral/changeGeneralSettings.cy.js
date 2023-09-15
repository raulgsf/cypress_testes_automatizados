describe('Vendedor Frontend - Deve ser capaz de alterar os dados básicos', () => {

    const nome = Cypress.env('nomeBasicoVendedor')
    const cpf = Cypress.env('cpfVendedor')
    const telefone = Cypress.env('telefoneVendedor')
    const tempo = Cypress.env('timeout')

    it('test change general', () => {
        cy.loginVendedor()

        //acessa meus dados
        cy.get('button.css-w5qhhs', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains("Meus dados").click()

        //apaga os dados recentes
        cy.get('input[name = "nome"]').type('{selectall}{backspace}')
        cy.get('input[name = "cpf"]').type('{selectall}{backspace}')
        cy.get('input[name = "telefone"]').type('{selectall}{backspace}')

        //seta os novos dados
        cy.get('input[name = "nome"]').type(nome)
        cy.get('input[name = "cpf"]').type(cpf)
        cy.get('input[name = "telefone"]').type(telefone).type('{enter}')

        //verifica se os dados foram atualizados
        cy.get('div[id = "notistack-snackbar"]').contains('Dados atualizados').should('be.visible')
    })
})