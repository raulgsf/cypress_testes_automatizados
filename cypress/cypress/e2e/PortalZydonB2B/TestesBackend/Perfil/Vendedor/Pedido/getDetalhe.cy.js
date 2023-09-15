describe('Vendedor - Deve ser capaz de obter os detalhes de um Pedido', () => {
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
                "tabelaID": "20",
                "filtros": [],
                "argumentos": [
                    {
                        "chave": "NUNOTA",
                        "valor": "285715"
                    }
                ],
                "onlyCamposIDs": [],
                "paginado": false,
                "sort": null
            },
            url: url + '/api/services?name=Pedido&method=getDetalhe',
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