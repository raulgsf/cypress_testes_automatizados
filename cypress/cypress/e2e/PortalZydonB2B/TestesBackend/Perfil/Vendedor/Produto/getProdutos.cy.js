describe('Vendedor - Deve ser capaz de trazer os Produtos', () => {
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
                "contexto": {
                    "id": "1",
                    "carrinho": {
                        "prePedido": {
                            "formularioID": "1",
                            "dados": [
                                {
                                    "campo": "1",
                                    "valor": "1"
                                },
                                {
                                    "campo": "2",
                                    "valor": "3100"
                                },
                                {
                                    "campo": "3",
                                    "valor": "1"
                                }
                            ]
                        },
                        "items": [],
                        "checkout": {
                            "tipoNegociacaoID": 123
                        }
                    }
                },
                "contextoTabela": {
                    "tabelaID": "5",
                    "filtros": [],
                    "argumentos": [],
                    "onlyCamposIDs": [],
                    "paginado": true,
                    "ordenacao": null,
                    "formularioID": "8"
                }
            },
            url: url + '/api/services?name=Produto&method=getProdutos&callID=234&origem=produtos&page=0&size=20',
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