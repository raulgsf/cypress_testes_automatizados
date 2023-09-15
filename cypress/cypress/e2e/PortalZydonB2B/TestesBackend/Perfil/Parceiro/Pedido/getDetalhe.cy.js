describe('Parceiro - Deve ser capaz de obter o detalhe de um Pedido', () => {
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
                "tabelaID": "20",
                "filtros": [],
                "argumentos": [
                    {
                        "chave": "NUNOTA",
                        "valor": "4268"
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