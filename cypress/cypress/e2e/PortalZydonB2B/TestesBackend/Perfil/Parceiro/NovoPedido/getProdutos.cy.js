describe("Parceiro - Deve ser capaz de listar os produtos no Novo Pedido", () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: "OPTIONS",
            body: {
                    "contexto": {
                        "carrinho": {
                            "items": [],
                            "prePedido": {
                                "dados": []
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
            url: url + "/api/services?name=NovoPedido&method=getProdutos&callID=165&origem=widget-2&page=0&size=15",
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            }
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
        })
    })
})