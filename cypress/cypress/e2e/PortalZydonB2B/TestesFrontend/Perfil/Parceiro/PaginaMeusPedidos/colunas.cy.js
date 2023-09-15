describe('Parceiro Frontend - Deve ser capaz de filtrar as colunas dos registros do Meus Pedidos', () => {

    const tempo = Cypress.env('timeout')
    const coluna = Cypress.env('colunaFiltroMeusPedidos')

    it('Deve filtrar os registros por colunas', () => {

        cy.loginParceiro()
        cy.wait(15000)

        //acessa Financeiro
        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Meus pedidos').click()

        //busca a coluna a ser ocultada
        cy.get('button[aria-label = "Select columns"]', { timeout: tempo }).click()
        cy.get('input[placeholder = "Digite o nome da coluna"]').type(coluna)
        cy.get('input[name = "1"]').click()
        cy.wait(5000)
        cy.get('div.MuiDataGrid-columnHeaderTitle').contains(coluna).should('not.exist')

        //testa os botões "Ocultar todas" e "Mostrar todas"
        cy.get('input[placeholder = "Digite o nome da coluna"]').type('{selectall}{backspace}')
        cy.get('button[type = "button"]').contains('Ocultar todas').click()
        cy.get('div.MuiDataGrid-columnHeaderTitle').should('not.visible')
        cy.wait(7500)
        cy.get('button[type = "button"]').contains('Mostrar todas').click()
        cy.get('div.MuiDataGrid-columnHeaderTitle').should('be.visible')
    })
})