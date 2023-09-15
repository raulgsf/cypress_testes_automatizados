describe('Vendedor - Deve ser capaz de alterar os dados do usuário', () => {
    before(() => {
        cy.loginVendedorBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenVendedor')
        const ingress = Cypress.env('origin')
        const nome = Cypress.env('nomeBasicoVendedor')
        const cpf = Cypress.env('cpfVendedor')
        const telefone = Cypress.env('telefoneVendedor')
        const recebeNotificacao = Cypress.env('recebeNotificacaoVendedor')

        cy.request({
            method: 'POST',
            body: {
                "nome": nome,
                "cpf": cpf,
                "telefone": telefone,
                "recebeNotificacao": recebeNotificacao
            },
            url: url + '/api/services?name=MeusDados&method=updateConfigBasica',
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