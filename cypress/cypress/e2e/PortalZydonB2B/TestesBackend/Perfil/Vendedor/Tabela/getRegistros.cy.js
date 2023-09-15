describe('Vendedor - Deve ser capaz de obter os registros de uma tabela', () => {
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
                "formularioID": null,
                "tabelaID": 1,
                "filtros":[
            
                ],
                "argumentos":[
            
                ],
                "onlyCamposIDs":[],
                "paginado": true,
                "sort": null
            },
            url: url + '/api/services?name=Tabela&method=getRegistros&page=0&size=12',
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