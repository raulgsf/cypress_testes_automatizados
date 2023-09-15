describe('Vendedor - Deve ser capz de trazer os Registros do Pedido', () => {
    before(() => {
        cy.loginVendedorBackend()
    })

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'POST',
            body: {
                "tabelaID": "7",
                "filtros": [],
                "argumentos": [
                    {
                        "chave": "CODPARC",
                        "valor": "1"
                    }
                ],
                "onlyCamposIDs": [],
                "paginado": true,
                "sort": null,
                "widgetID": "1",
                "novoPedidoID": "1"
            },
            url: url + '/api/services?name=Pedido&method=getRegistros&page=0&size=9',
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