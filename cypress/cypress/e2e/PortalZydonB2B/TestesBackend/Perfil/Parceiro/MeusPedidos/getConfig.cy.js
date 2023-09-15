describe('Parceiro - Deve ser capaz de obter as configurações dos Meus Pedidos', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')
        
        cy.request({
            method: 'POST',
            body: {
                "id": 1
            },
            url: url + '/api/services?name=MeusPedidos&method=getConfiguracao',
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