/*describe('Geral - Deve ser capaz de criar um Formulário Público', () => {
    before(() => {
        cy.loginParceiroBackend()
    })

    it('test check return 200', () => {
        const url = Cypress.env('portalUrlBackEnd')
        const ingress = Cypress.env('origin')

        cy.request({
            method: 'POST',
            body: {
                "formulario": 7,
                "dados": [
                    {
                        "campo": "1",
                        "valor": "Raul"
                    },
                    {
                        "campo": "2",
                        "valor": "000.000.000-00"
                    },
                    {
                        "campo": "3",
                        "valor": "38413-616"
                    },
                    {
                        "campo": "4",
                        "valor": "Rua Secundino Olimpio da Cunha"
                    },
                    {
                        "campo": "5",
                        "valor": "330"
                    },
                    {
                        "campo": "6",
                        "valor": "Panorama"
                    },
                    {
                        "campo": "7",
                        "valor": "Casa"
                    },
                    {
                        "campo": "8",
                        "valor": "Uberlândia"
                    },
                    {
                        "campo": "9",
                        "valor": "raul@gmail.com"
                    },
                    {
                        "campo": "10",
                        "valor": "34999990000"
                    },
                    {
                        "campo": "11",
                        "valor": "34999900000"
                    }
                ]
            },
            url: url + '/api/services/public?name=FormularioPublico&method=createRegistro',
            headers: {
                'X-Zdn-Ingress': ingress,
            },
        }).then((resp) => {
            expect(resp.status).to.be.equal(200)
            expect(resp.body).is.not.empty
        })
    })
})~*/