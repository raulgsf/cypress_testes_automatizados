describe('Vendedor - Deve ser capaz de recuperar a configuração da Carteira de Clientes', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')
        
        cy.request({
            method: 'POST',
            body: {},
            url: url + '/api/services?name=CarteiraCliente&method=getConfiguracao',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            },
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
        })
    })
})