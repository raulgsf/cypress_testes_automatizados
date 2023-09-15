describe('Vendedor - Deve ser capaz de obter os endereçoes no Novo Pedido', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')

        cy.request({
            method: "POST",
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
                    "tabelaID": "15",
                    "filtros": [],
                    "argumentos": [], 
                    "onlyCamposIDs": [],
                    "paginado": false,
                    "sort": null
                }
            },
            url: url + "/api/services?name=NovoPedido&method=getEnderecos",
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