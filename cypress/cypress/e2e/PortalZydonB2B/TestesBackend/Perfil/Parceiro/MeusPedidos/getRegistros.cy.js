describe('Parceiro - Deve ser capaz de listar os pedidos do usuário', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'OPTIONS',
            body: {},
            url: url + '/api/services?name=MeusPedidos&method=getRegistros&page=0&size=12',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            },
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
        })
    })
})