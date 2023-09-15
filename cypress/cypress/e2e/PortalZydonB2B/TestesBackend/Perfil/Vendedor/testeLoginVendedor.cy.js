describe('Vendedor - Login de Usuário', () => {
     
    it('test check return 200 in login and stores the access token', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const user = Cypress.env('userVendedor')
        const password = Cypress.env('passwordVendedor')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'POST',
            body: {
                "usuario": user,
                "senha": password
            },
            url: url + '/api/oauth/token',
            headers: {
                'X-Zdn-Ingress': ingress
            }
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty

            expect(resp.body).to.have.property('accessToken')
            expect(resp.body).to.have.property('refreshToken')
            
            const localToken = resp.body.accessToken
            Cypress.env('accessTokenVendedor', localToken)
        })
    })
}) 