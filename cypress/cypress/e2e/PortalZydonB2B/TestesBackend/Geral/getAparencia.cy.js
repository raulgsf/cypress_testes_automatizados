describe('Método getAparência do Portal', () => {

    it('check images', () => {
        const ingress = Cypress.env('origin')
        const url = Cypress.env('portalUrlBackEnd')

        cy.request({
            method: 'POST',
            body: {},
            url: url + '/api/services/public?name=Portal&method=getAparencia',
            headers: {
                'X-Zdn-Ingress': ingress,
            },
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
        })
    })
})