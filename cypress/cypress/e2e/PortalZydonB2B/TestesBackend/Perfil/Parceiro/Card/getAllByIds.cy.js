describe('Parceiro Frontend - Deve ser capaz de trazer o Card pelos Ids', () => {
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
                "ids": [
                    "5",
                    "6",
                    "7",
                    "8",
                    "9"
                ],
                "argumentos": []
            },
            url: url + '/api/services?name=Card&method=getAllByIds',
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