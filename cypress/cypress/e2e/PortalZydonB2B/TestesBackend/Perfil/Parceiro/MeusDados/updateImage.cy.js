describe('Parceiro - Deve ser capaz de mudar a imagem de avatar do usuário', () => {
    before(() => {
        cy.loginParceiroBackend();
    });

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const accessToken = Cypress.env('accessTokenParceiro')
        const ingress = Cypress.env('origin')
        const fotoPerfil = Cypress.env('fotoPerfilParceiro')
        
        cy.request({
            method: 'POST',
            body: {
                "foto": fotoPerfil
            },
            url: url + '/api/services?name=MeusDados&method=updateImage',
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