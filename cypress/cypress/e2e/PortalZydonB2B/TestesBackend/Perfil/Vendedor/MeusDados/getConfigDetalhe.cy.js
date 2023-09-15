describe('Vendedor - Deve ser capaz de obter a configuração detalhada do usuário', () => {
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
                "tabelaID": 25,
                "filtros":[
                     
                ],
                "argumentos":[
                  {
                      "chave": "CODPARC",
                      "valor": 1
                  }
                ],
                "onlyCamposIDs":[],
                "paginado": false,
                "sort": null
            },
            url: url + '/api/services?name=MeusDados&method=getConfigDetalhe',
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