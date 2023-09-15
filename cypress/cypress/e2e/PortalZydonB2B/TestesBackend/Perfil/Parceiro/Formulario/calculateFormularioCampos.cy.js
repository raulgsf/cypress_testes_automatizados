describe('Parceiro - Deve calcular os campos do formulário por id da condicional', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')
        
        cy.request({
            method: 'POST',
            body: {
                "campos": [{
                    "campo": 1, "valor": 0
                }],
                "condicional": 1,
                "formulario": 1
            },
            url: url + '/api/services?name=Formulario&method=calculateFormularioCamposByFormularioCondicionalId',
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