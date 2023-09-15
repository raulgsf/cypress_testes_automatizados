describe('Parceiro - Deve ser capaz de trazer o Resumo do Pedido', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'POST',
            body:{
                "indice": {
                     "nomeCampo": "NUNOTA",
                     "valor": "4268"
                }
            },
            url: url + '/api/services?name=Pedido&method=getResumo',
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