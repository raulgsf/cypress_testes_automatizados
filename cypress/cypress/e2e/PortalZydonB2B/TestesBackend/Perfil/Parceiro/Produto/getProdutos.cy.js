describe('Parceiro Frontend - Deve ser capaz de trazer os produtos', () => {
    before(() => {
        cy.loginParceiroBackend()
    })

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'POST',
            body: {
                "contexto": {
                    "carrinho": {
                        "items": [],
                        "prePedido": {
                            "dados": []
                        },
                        "checkout": {
                            "tipoNegociacaoID": 122
                        }
                    },
                    "id": "1"
                },
                "contextoTabela": {
                    "tabelaID": "22",
                    "formularioID": "",
                    "filtros": [],
                    "argumentos": [],
                    "onlyCamposIDs": [],
                    "ordenacao": {
                        "id": "3",
                        "direction": "ASC"
                    },
                    "paginado": true
                },
                "widgetID": "2"
            },
            url: url + '/api/services?name=Produto&method=getProdutos&callID=878&origem=widget-2&page=0&size=15',
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