describe('Parceiro - Deve ser capaz de listar os tipos de negociação no Novo Pedido', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'POST',
            body: {
                "contexto":{
                    "id":"1",
                    "carrinho":{
                        "prePedido":{
                            "formularioID":"1",
                            "dados":[{
                                "campo":"1",
                                "valor":"2"
                            }]
                        },
                        "items":[]
                    }
                },
                "contextoTabela":{
                    "tabelaID":"4",
                    "filtros":[],
                    "argumentos":[{
                        "chave":"CODPARC",
                        "valor":"2"
                    }],
                    "onlyCamposIDs":[]
                }
            },
            url: url + '/api/services?name=NovoPedido&method=getNegociacoes',
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