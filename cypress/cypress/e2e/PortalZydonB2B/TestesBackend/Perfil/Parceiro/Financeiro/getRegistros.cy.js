describe('Parceiro - Deve obter os registros do Financeiro', () => {
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
            url: url + '/api/services?name=Financeiro&method=getRegistros&page=0&size=96',
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