describe('Vendedor - Deve ser capaz de mudar o avatar do usuário', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')
        const fotoPerfil = Cypress.env('fotoPerfilVendedor')
        
        cy.request({
            method: 'POST',
            body: {
                "foto": fotoPerfil
            },
            url: url + '/api/services?name=MeusDados&method=updateImage',
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