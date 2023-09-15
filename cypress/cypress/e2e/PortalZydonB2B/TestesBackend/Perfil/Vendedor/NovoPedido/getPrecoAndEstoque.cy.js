describe('Vendedor - Deve ser capaz de obter os dados de preço e estoque de um produto no Novo Pedido', () => {
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
                      "contexto": {
                          "id": "1",
                          "carrinho": {
                              "prePedido": {
                                  "formularioID": "1",
                                  "dados": [
                                      {
                                          "campo": "1",
                                          "valor": "1"
                                      },
                                      {
                                          "campo": "2",
                                          "valor": "3100"
                                      },
                                      {
                                          "campo": "3",
                                          "valor": "1"
                                      }
                                  ]
                              },
                              "items": []
                          }
                      },
                      "contextoTabela": {
                          "tabelaID": "5",
                          "filtros": [],
                          "argumentos": [],
                          "onlyCamposIDs": [],
                          "paginado": true,
                          "sort": null
                      },
                      "produtoSelecionado": {
                          "id": "1002941",
                          "quantidade": 1,
                          "valorDesconto": 0,
                          "valorPercentual": 0,
                          "unidade": "MT",
                          "registro": {
                              "indices": [
                                  {
                                      "ordem": 1,
                                      "nomeCampo": "CODPROD",
                                      "valor": 1002941
                                  }
                              ],
                              "preco": {
                                  "valorUnitario": 230,
                                  "valor": 230,
                                  "valorTotal": 230,
                                  "quantidade": 1,
                                  "unidade": "MT",
                                  "descontoPercercentual": 0,
                                  "descontoValor": 0
                              },
                              "estoque": 141.5,
                              "unidadePadrao": "MT",
                              "favorito": false,
                              "unidades": [
                                  {
                                      "id": "MT",
                                      "descricao": "METRO",
                                      "padrao": true,
                                      "quantidade": 0,
                                      "multiplicador": 1,
                                      "seletor": "CONTADOR"
                                  }
                              ],
                              "valores": [
                                  {
                                      "mapeamentoCampo": "2",
                                      "nomeCampo": "DESCRPROD",
                                      "valor": "Telhas Onduladas (ON17)"
                                  },
                                  {
                                      "mapeamentoCampo": "7",
                                      "nomeCampo": "MARCA",
                                      "valor": ""
                                  },
                                  {
                                      "mapeamentoCampo": "8",
                                      "nomeCampo": "REFERENCIA",
                                      "valor": ""
                                  },
                                  {
                                      "mapeamentoCampo": "3",
                                      "nomeCampo": "CARACTERISTICAS",
                                      "valor": ""
                                  },
                                  {
                                      "mapeamentoCampo": "1",
                                      "nomeCampo": "CODPROD",
                                      "valor": 1002941
                                  },
                                  {
                                      "mapeamentoCampo": "4",
                                      "nomeCampo": "CODVOL",
                                      "valor": [
                                          "MT",
                                          "METRO "
                                      ]
                                  },
                                  {
                                      "mapeamentoCampo": "6",
                                      "nomeCampo": "ATIVO",
                                      "valor": "S"
                                  },
                                  {
                                      "mapeamentoCampo": "5",
                                      "nomeCampo": "IMAGEM",
                                      "valor": "true"
                                  }
                              ],
                              "items": [
                                  {
                                      "id": "1002941",
                                      "descricao": "Telhas Onduladas (ON17)",
                                      "unidade": {
                                          "id": "MT",
                                          "descricao": "METRO",
                                          "padrao": true,
                                          "quantidade": 0,
                                          "multiplicador": 1,
                                          "seletor": "CONTADOR"
                                      },
                                      "preco": {
                                          "valorUnitario": 230,
                                          "valor": 230,
                                          "valorTotal": 230,
                                          "quantidade": 1,
                                          "unidade": "MT",
                                          "descontoPercercentual": 0,
                                          "descontoValor": 0
                                      }
                                  }
                              ],
                              "camposFixos": [
                                  {
                                      "referencia": "DESCRICAO",
                                      "valor": ""
                                  },
                                  {
                                      "referencia": "IMAGEM_ARQUIVO",
                                      "valor": "true"
                                  },
                                  {
                                      "referencia": "TITULO",
                                      "valor": "Telhas Onduladas (ON17)"
                                  },
                                  {
                                      "referencia": "UNIDADE_PADRAO",
                                      "valor": [
                                          "MT",
                                          "METRO "
                                      ]
                                  }
                              ],
                              "camposFlexiveis": [
                                  {
                                      "mapeamentoCampo": "7",
                                      "descricao": "Marca",
                                      "valor": ""
                                  },
                                  {
                                      "mapeamentoCampo": "8",
                                      "descricao": "Referência",
                                      "valor": ""
                                  }
                              ]
                          }
                      }
                  },
            url: url + '/api/services?name=NovoPedido&method=getPrecoAndEstoque',
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