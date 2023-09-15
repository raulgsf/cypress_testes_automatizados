describe("Parceiro - Deve ser capaz de recuperar o Histórico de Buscas de uma tabela", () => {
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
                "id": 1
            },
            url: url + '/api/services?name=Tabela&method=getHistoricoBuscas',
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