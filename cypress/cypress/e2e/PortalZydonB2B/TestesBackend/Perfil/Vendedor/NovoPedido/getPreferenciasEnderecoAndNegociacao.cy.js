describe('Vendedor - Deve ser capaz de obter as Preferências do Endereço e Negociações', () => {
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
                "novoPedidoID": "1"
            },
            url: url + '/api/services?name=NovoPedido&method=getPreferenciasEnderecoAndNegociacao',
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