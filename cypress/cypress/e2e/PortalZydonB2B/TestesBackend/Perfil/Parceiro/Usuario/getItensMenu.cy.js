describe('Parceiro - Deve ser capaz de listar os itens de Menu', () => {
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
            url: url + '/api/services?name=Usuario&method=getItensMenu',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            },
        }).then((resp) => {
            expect(resp.status).to.be.equal(200),
            expect(resp.body).is.not.empty
        })
    })
})