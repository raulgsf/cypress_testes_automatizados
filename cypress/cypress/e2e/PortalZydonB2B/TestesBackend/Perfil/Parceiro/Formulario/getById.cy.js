describe('Parceiro - Deve ser capaz de recuperar um Formulário por id', () => {
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
                "chave":"2",
                "id":"2"
            },
            url: url + '/api/services?name=Formulario&method=getById',
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