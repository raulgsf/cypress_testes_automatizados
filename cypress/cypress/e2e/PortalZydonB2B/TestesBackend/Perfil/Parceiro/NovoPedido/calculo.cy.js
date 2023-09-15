describe('Parceiro - Deve ser capaz de calcular os dados do Novo Pedido', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'OPTIONS',
            body: {
                "id": "1",
                "carrinho": {
                    "prePedido": {
                        "dados": []
                    },
                    "checkout": {
                        "tipoNegociacaoID": 46,
                        "enderecoID": "-2",
                        "endereco": "DIAMANTINA BOA VISTA N° 164 PATOS DE MINAS /  - 38705110 testando",
                        "formularioID": "2",
                        "desconto": 0,
                        "dados": [
                            {
                                "campo": "1",
                                "valor": "3100"
                            },
                            {
                                "campo": "3",
                                "valor": "1"
                            },
                            {
                                "campo": "4",
                                "valor": "25"
                            }
                        ]
                    },
                    "items": [
                        {
                            "id": "1002967",
                            "unidade": "UN",
                            "quantidade": 100,
                            "percentualDesconto": 0,
                            "valorDesconto": 0
                        }
                    ]
                }
            },
            url: url + '/api/services?name=NovoPedido&method=calculo',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            },
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
        })
    })
})