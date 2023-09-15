describe('Vendedor - Deve ser capaz de recuperar as Categorias de Produto', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')
        
        cy.request({
            method: 'POST',
            body: {
                "formulario": 99900,
                "campo": "99900"
            },
            url: url + '/api/services?name=Categoria&method=findAll',
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