describe('Vendedor - Deve ser possível adicionar um produto como favorito', () => {
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
                "codProd": 0,
                "adicionar": "S"
            },
            
            url: url + '/api/services?name=Usuario&method=updateProdutoFavorito',
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