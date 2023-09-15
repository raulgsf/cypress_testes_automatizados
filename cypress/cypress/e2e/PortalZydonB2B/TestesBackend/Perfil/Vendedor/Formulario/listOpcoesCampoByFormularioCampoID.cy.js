describe('Vendedor - Deve ser capaz de listar as opções de um campo do formulário', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')
        
        cy.request({
            method: 'POST',
            body: {
                "campo": 2,
                "formulario": 1
            },
            url: url + '/api/services?name=Formulario&method=listOpcoesCampoByFormularioCampoID',
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