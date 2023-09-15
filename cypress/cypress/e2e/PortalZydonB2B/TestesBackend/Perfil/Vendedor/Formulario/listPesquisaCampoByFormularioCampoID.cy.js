describe('Vendedor - Deve ser capaz de recuperar os dados de Pesquisa de um campo do Formulário do tipo Pesquisa', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')

        cy.request({
            method: "POST",
            body: {
                "formulario": 1,
                "campo": 1
            },
            url: url + "/api/services?name=Formulario&method=listPesquisaCampoByFormularioCampoID",
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