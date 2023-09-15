describe('Parceiro - Deve ser capaz de atualizar os dados do usuário', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')
        const nome = Cypress.env('nomeBasicoParceiro')
        const cpf = Cypress.env('cpfParceiro')
        const telefone = Cypress.env('telefoneParceiro')
        const recebeNotificacao = Cypress.env('recebeNotificacaoParceiro')

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