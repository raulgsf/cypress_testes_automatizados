describe("Parceiro - Deve ser capaz de obter o detalhe de uma Tabela", () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it("teste", () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
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
            url: url + '/api/services?name=Tabela&method=getDetalhe',
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