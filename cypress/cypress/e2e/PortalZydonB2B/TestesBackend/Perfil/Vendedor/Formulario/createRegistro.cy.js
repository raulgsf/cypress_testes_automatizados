describe('Vendedor - Deve ser capaz de criar um registro em um Formulário', () => {
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
                "formulario": "4",
                "dados": [
                    {
                        "campo": "1",
                        "valor": "raul"
                    },
                    {
                        "campo": "6",
                        "valor": ""
                    },
                    {
                        "campo": "3",
                        "valor": "17236338605"
                    },
                    {
                        "campo": "16",
                        "valor": "25"
                    },
                    {
                        "campo": "17",
                        "valor": "S"
                    },
                    {
                        "campo": "2",
                        "valor": "F"
                    },
                    {
                        "campo": "19",
                        "valor": ""
                    },
                    {
                        "campo": "14",
                        "valor": "3499990000"
                    },
                    {
                        "campo": "13",
                        "valor": "raulgsf3007@gmail.com"
                    },
                    {
                        "campo": "15",
                        "valor": "34999990000"
                    },
                    {
                        "campo": "7",
                        "valor": "38413616",
                        "controle": {
                            "CODCID": "5357",
                            "CODUF": "2",
                            "CODEND": "1738",
                            "CODBAI": "110",
                            "UF": "MG",
                            "CIDADE": "Uberlândia",
                            "NUMERO": "330",
                            "COMPLEMENTO": "casa"
                        }
                    },
                    {
                        "campo": "18",
                        "valor": "S"
                    }
                ]
            },
            url: url + '/api/services?name=Formulario&method=createRegistro',
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