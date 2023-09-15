describe('Parceiro Frontend - Deve verificar se os Filtros na página inicial', () => {

    const tempo = Cypress.env('timeout')
    const marca = Cypress.env('marcaFiltroPaginaInicial')

    it('filtros página inicial', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('button[type = "button"]').contains('Filtros').click()
        cy.get('input[name = 1]').type(marca)
        cy.wait(5000)
        cy.get('button[type = "submit"]').contains('Aplicar filtros').click()
        cy.wait(5000)
        cy.get('p').contains('Marca: ' + marca).should('be.visible')

        cy.wait(10000)
        cy.get('button[type = "button"]').contains('Filtros').click()
        cy.get('button[type = "button"]').contains('Limpar').click()
    })
})