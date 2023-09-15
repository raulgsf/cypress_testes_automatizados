describe("Vendedor - Deve ser capaz de obter os produto no Novo Pedido", () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')

        cy.request({
            method: "OPTIONS",
            body: {
                "contexto": {
                    "id": 1,
                    "carrinho": {
                        "prePedido": {
                            "dados": [
            
                            ]
                        }, 
                        "items": [
            
                        ]
                    }
                },
                "contextoTabela": {
                    "argumentos": [], 
                    "busca": null,
                    "favoritos": true,
                    "filtros": [],
                    "onlyCamposIDs": [],
                    "ordenacao": null,
                    "paginado": true,
                    "tabelaID": "22"
                }
            },
            url: url + "/api/services?name=NovoPedido&method=getProdutos&page=0&size=20",
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            }
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
        })
    })
})