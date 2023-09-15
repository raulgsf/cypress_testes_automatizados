describe('Parceiro - Deve poder mudar a senha do usuário', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')
        const password = Cypress.env('passwordParceiro')
        const newPassword = Cypress.env('newPasswordParceiro')

        cy.request({
            method: 'POST',
            body: {
                "password": password,
                "newPassword": newPassword
            },
            url: url + '/api/services?name=MeusDados&method=changePassword',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            }
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
        })

        cy.wait(2000)

        cy.request({
            method: 'POST',
            body: {
                "password": newPassword,
                "newPassword": password
            },
            url: url + '/api/services?name=MeusDados&method=changePassword',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            }

        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
        })
    })
})