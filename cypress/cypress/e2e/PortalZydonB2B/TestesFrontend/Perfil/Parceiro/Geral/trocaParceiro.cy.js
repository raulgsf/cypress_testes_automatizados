describe('Parceiro Frontend - Deve verificar a Troca de Parceiro', () => {

    const tempo = Cypress.env('timeout')
    const novoParceiro = Cypress.env('novoParceiroTroca')
    const antigoParceiro = Cypress.env('antigoParceiroTroca')

    it('teste troca de parceiro', () => {
        cy.loginParceiro()
        cy.wait(30000)

        cy.get('button.css-w5qhhs', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains("Troca de parceiro").click()

        cy.get('input[placeholder = "Buscar parceiro"]').type(novoParceiro)
        cy.get('h6').contains(novoParceiro).click()
        cy.get('button[type = "button"]').contains('Trocar parceiro').click()

        cy.wait(10000)

        cy.get('button.css-w5qhhs', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains("Troca de parceiro").click()

        cy.get('input[placeholder = "Buscar parceiro"]').type(antigoParceiro)
        cy.get('h6').contains(antigoParceiro).click()
        cy.get('button[type = "button"]').contains('Trocar parceiro').click()
    })
})