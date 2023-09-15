describe('Deve ser capaz de trazer as categorias da Vitrine', () => {

    it('test check return 200', () => {
        const ingress = Cypress.env('origin')
        const url = Cypress.env('portalUrlBackEnd')

        cy.request({
            method: 'POST',
            body: {},
            url: url + '/api/services/public?name=Vitrine&method=getCategorias',
            headers: {
                'X-Zdn-Ingress': ingress
            },
        }).then((resp) => {
            expect(resp.status).to.be.eq(200)
            expect(resp.body).is.not.empty
        })
    })
})