describe('Parceiro - Deve listar todas as FAQ', () => {
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
            url: url + '/api/services?name=Faq&method=findAll',
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            }
        })
    })
})