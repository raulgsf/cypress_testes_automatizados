describe('Parceiro Frontend - Deve ser capaz de alterar a senha', () => {
    const password = Cypress.env('passwordParceiro')
    const newPassword = Cypress.env('newPasswordParceiro')
    const tempo = Cypress.env('timeout')

    it('test change password, password to new password and new password to password', () => {
        cy.loginParceiro()
        cy.wait(30000)
        //acessa meus dados
        cy.get('button.css-w5qhhs', { timeout: tempo }).click()
        cy.get('li[tabindex = "-1"]').contains("Meus dados").click()
        cy.wait(10000)

        //acessa alterar senha
        cy.get('button[type = "button"]').contains('Alterar senha').click()
        
        //digita a senha atual e seta a nova senha com confirmação
        cy.get('input[name = "password"]').click().type(password)
        cy.get('input[name = newPassword]').click().type(newPassword)
        cy.get('input[name = confirmPassword]').click().type(newPassword).type('{enter}')

        //verifica se a senha foi alterada
        cy.get('div[id = "notistack-snackbar"]').contains('Senha atualizada').should('be.visible')

        //apaga os dados recentes
        cy.get('input[name = password]').type('{selectall}{backspace}')
        cy.get('input[name = newPassword]').type('{selectall}{backspace}')
        cy.get('input[name = confirmPassword]').type('{selectall}{backspace}')

        //digita a senha atual e seta a nova senha 
        cy.get('input[name = "password"]').click().type(newPassword)
        cy.get('input[name = newPassword]').click().type(password)
        cy.get('input[name = confirmPassword]').click().type(password).type('{enter}')

        //verifica se a senha foi alterada
        cy.get('div[id = "notistack-snackbar"]', {timeout: tempo}).contains('Senha atualizada').should('be.visible')
    })
})