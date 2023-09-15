describe('Parceiro - Deve ser capaz de listar os endereços no Novo Pedido', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: "POST",
            body: {
                "contexto": {
                    "id": 1,
                    "carrinho": {
                        "prePedido": {
                        "formularioID": 1,
                            "dados": [
            
                            ]
                        },
                        "checkout": null,
                        "items": [
            
                        ]
                    }
                },
                "contextoTabela": {
                    "tabelaID": 99902,
                    "filtros": [],
                    "argumentos": [], 
                    "onlyCamposIDs": [],
                    "paginado": false,
                    "ordenacao": null
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