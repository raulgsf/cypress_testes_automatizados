describe('Vendedor - Deve se capaz de mudar a senha do usuário', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')
        const password = Cypress.env('passwordVendedor')
        const newPassword = Cypress.env('newPasswordVendedor')

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