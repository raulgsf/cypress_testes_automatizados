describe('Parceiro - Deve ser capaz de buscar as configurações detalhadas do Meus Dados', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')
        
        cy.request({
            method: 'POST',
            body: {},
            url: url + '/api/services?name=MeusDados&method=getConfigDetalhe',
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