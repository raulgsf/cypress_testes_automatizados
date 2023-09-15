describe('Vendedor - Deve ser capaz de obter o detalhe de uma tabela', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')

        cy.request({
            method: "OPTIONS",
            body: {
                "tabelaID": 1,
                "filtros": [],
                "argumentos": [],
                "onlyCamposIDs": [],
                "paginado": false,
                "sort": null
            },
            url: url + "/api/services?name=Tabela&method=getDetalhe",
            headers: {
                'X-Zdn-Ingress': ingress,
                'token': accessToken
            }
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
        })
    })
})