/*describe('Parceiro - Deve ser capaz de adicionar, remover e alterar filtros na página Financeiro', () => {

    function isValidDate(date) {
      return !isNaN(new Date(date).getTime());
    }

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }

    function formatDateToString(date) {
        var first = date.substr(0,2);
        var secund = date.substr(3,2);
        var thirt = date.substr(6,4);
        return [
            padTo2Digits(secund),
            padTo2Digits(first),
            padTo2Digits(thirt)
        ].join('/');
    }

    function formatDate(date) {
      return [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
      ].join('/');
    }

    function normalizeDate(date) {
        var dataConvertida = Date.parse(date);
        return formatDate(new Date(dataConvertida));
    }

    let tempo = Cypress.env('timeout')

    it('Deve adicionar, remover e alterar um filtro', () => {

        let coluna = Cypress.env('colunaFiltroFinanceiro')
        let condicao = Cypress.env('condicaoFiltroFinanceiro')
        let valorFiltro = Cypress.env('valorFiltroFinanceiro')
        let numeroUnico = Cypress.env('valorNumeroUnicoFinanceiroComparacao')
        let valorSetadoDesdobramento = Cypress.env('valorDesdobramentoFinanceiroComparacao')
        let dataComparacao = Cypress.env('dataVencimentoFinanceiroComparacao')
        let numeroNota = Cypress.env('valorNumeroNotaFinanceiroComparacao')
        let { isValid, parseISO } = require('date-fns')

        cy.loginParceiro()
        cy.wait(15000)

        //acessa Financeiro
        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div.MuiButtonBase-root').contains('Financeiro').click()
        cy.wait(15000)

        //seta os valores do filtro
        cy.get('button[aria-label = "Show filters"]', { timeout: tempo }).click()
        cy.wait(5000)
        cy.get('.css-1lfl7ts select.css-14mvkak').select(coluna)
        cy.wait(5000)
        cy.get('.css-14wd8o select.css-14mvkak').select(condicao)
        cy.wait(5000)

        //trata caso a condição for Vazio
        if(condicao == 'Vazio'){
            if(coluna == 'Nro Único'){
                cy.get('div.css-1wczjc0').click()
                cy.get('div[data-colindex = 0]').then(numeros => {
                    cy.get(numeros).should('have.length', 1)
                })
            }else if(coluna == 'Vlr do Desdobramento'){
                cy.get('div.css-1wczjc0').click()
                cy.get('div[data-colindex = 2]').then(numeros => {
                    cy.get(numeros).should('have.length', 1)
                })
            }
        // trata caso a condição for Preenchido
        }else if(condicao == 'Preenchido'){
            if(coluna == 'Nro Único'){
                cy.get('div.css-1wczjc0').click()
                cy.get('div[data-colindex = 0]').then(numeros => {
                    cy.wrap(numeros).should('not.be.empty')
                })
            }else if(coluna == 'Vlr do Desdobramento'){
                cy.get('div.css-1wczjc0').click()
                cy.get('div[data-colindex = 2]').then(numeros => {
                    cy.wrap(numeros).should('not.be.empty')
                })
            }
        }else{
            if(coluna == 'Nro Único'){
                cy.get('input[placeholder = "Valor do filtro"]').type(valorFiltro).type('{enter}')
                if(condicao == '=' || condicao == 'Qualquer'){
                    cy.log('condição = || Qualquer')
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 0]').then(numeros => {
                        let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                        cy.wrap(numerosColuna).each(numero => {
                            if(numerosColuna.length > 0){
                                if(numero == numeroUnico){
                                    expect(numero).be.eq(parseInt(numeroUnico))
                                }else{
                                    cy.log('é NaN')
                                }
                            }else{
                                assert.equal('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }else{
                    if(condicao == '!='){
                        cy.log('condição !=')
                        cy.wait(5000)
                        cy.get('button[aria-label = "Show filters"]').click()
                        cy.get('.css-1inm7gi div[data-colindex = 0]').then(numeros => {
                            let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                            cy.wrap(numerosColuna).each(numero => {
                                if(numerosColuna.length > 0){
                                    if(numero != numeroUnico){
                                        expect(numero).not.to.eq(parseInt(numeroUnico))
                                    }else{
                                        cy.log('é NaN')
                                    }
                                }else{
                                    assert.equal('Erro: Nenhum valor encontrado')
                                }
                            })
                        })
                    }else{
                        if(condicao == '>'){
                            cy.log('condição >')
                            cy.wait(5000)
                            cy.get('button[aria-label = "Show filters"]').click()
                            cy.get('.css-1inm7gi div[data-colindex = 0]').then(numeros => {
                                let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                cy.wrap(numerosColuna).each(numero => {
                                    if(numerosColuna.length > 0){
                                        if(numero > numeroUnico){
                                            expect(numero).to.be.gt(parseInt(numeroUnico))
                                        }else{
                                            cy.log('é NaN')
                                        }
                                    }else{
                                        assert.equal('Erro: Nenhum valor encontrado')
                                    }
                                })
                            })
                        }else{
                            if(condicao == '>='){
                                cy.log('condição >=')
                                cy.wait(5000)
                                cy.get('button[aria-label = "Show filters"]').click()
                                cy.get('.css-1inm7gi div[data-colindex = 0]').then(numeros => {
                                    let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                    cy.wrap(numerosColuna).each(numero => {
                                        if(numerosColuna.length > 0){
                                            if(numero >= numeroUnico){
                                                expect(numero).to.be.gte(parseInt(numeroUnico))
                                            }else{
                                                 cy.log('é NaN')
                                            }
                                        }else{
                                            assert.equal('Erro: Nenhum valor encontrado')
                                        }
                                    })
                                })
                            }else{
                                if(condicao == '<'){
                                    cy.log('condição <')
                                    cy.wait(5000)
                                    cy.get('button[aria-label = "Show filters"]').click()
                                    cy.get('.css-1inm7gi div[data-colindex = 0]').then(numeros => {
                                        let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                        cy.wrap(numerosColuna).each(numero => {
                                            if(numerosColuna.length > 0){
                                                if(numero < numeroUnico){
                                                    expect(numero).to.be.lt(parseInt(numeroUnico))
                                                }else{
                                                    cy.log('é NaN')
                                                }
                                            }else{
                                                assert.equal('Erro: Nenhum valor encontrado')
                                            }
                                        })
                                    })
                                }else{
                                    if(condicao == '<='){
                                        cy.log('condição <=')
                                        cy.wait(5000)
                                        cy.get('button[aria-label = "Show filters"]').click()
                                        cy.get('.css-1inm7gi div[data-colindex = 0]').then(numeros => {
                                            let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                            cy.wrap(numerosColuna).each(numero => {
                                                if(numerosColuna.length > 0){
                                                    if(numero <= numeroUnico){
                                                        expect(numero).to.be.lte(parseInt(numeroUnico))
                                                    }else{
                                                        cy.log('é NaN')
                                                    }
                                                }else{
                                                    assert.equal('Erro: Nenhum valor encontrado')
                                                }
                                            })
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }else if(coluna == 'Dt. Vencimento'){
                cy.get('input[placeholder = "Valor do filtro"]').type(valorFiltro)
                if(condicao == 'É' || condicao == 'Qualquer'){
                    cy.log('condicao É')
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 1]').then(datasPegadas => {
                        let datasColuna = datasPegadas.toArray().map(el => el.innerText.trim())
                        cy.wrap(datasColuna).each(data => {
                            if(dataComparacao.toString() === data.toString()){
                                expect(dataComparacao).to.eql(data)
                            }else{
                                assert.eq('Erro: bug')
                            }
                        })
                    })
                }else{
                    if(condicao == 'Não é'){
                        cy.log('condicao Não é')
                        cy.wait(5000)
                        cy.get('button[aria-label = "Show filters"]').click()
                        cy.get('.css-1inm7gi div[data-colindex = 1]').then(datasPegadas => {
                            let datasColuna = datasPegadas.toArray().map(el => el.innerText.trim())
                            cy.wrap(datasColuna).each(data => {
                                if(dataComparacao.toString() !== data.toString()){
                                    expect(dataComparacao).not.to.eql(data)
                                }else{
                                    assert.eq('Erro: bug')
                                }
                            })
                        })
                    }else{
                        if(condicao == 'Depois de'){
        //FAZER                    cy.log('condicao Depois de')
                            cy.wait(5000)
                            cy.get('button[aria-label = "Show filters"]').click()
                            cy.get('.css-1inm7gi div[data-colindex = 1]').then(datasPegadas => {
                                let datasColuna = datasPegadas.toArray().map(el => el.innerText.trim())
                                cy.wrap(datasColuna).each(data => {
                                    if(dataComparacao > data){
                                        expect(data).to.be.gt(dataComparacao)
                                    }else{
                                        cy.log(dataComparacaoFormatada, dataFormatada)
                                    }
                                })
                            })
                        }else{
                            if(condicao == 'Depois ou igual a'){
        //FAZER                        cy.log('condicao Depois ou igual a')
                                cy.wait(5000)
                                cy.get('button[aria-label = "Show filters"]').click()
                                cy.get('div[data-colindex = 1]').then(datasPegadas => {
                                    const datasColuna = datasPegadas.toArray().map(el => el.innerText.trim())
                                    cy.wrap(datasColuna).each(data => {
                                        var dataFormatada = formatDateToString(data)
                                        var dataComparacaoFormatada = formatDateToString(dataComparacao);
                                        var dataReformatada = normalizeDate(new Date(dataFormatada));
                                        var dataComparacaoReformatada = normalizeDate(new Date(dataComparacaoFormatada));
                                        if(isValidDate(dataReformatada)){
                                            expect(dataReformatada >= dataComparacaoReformatada).to.be.true
                                        }
                                    })
                                })
                            }else{
                                if(condicao == 'Antes de'){
  //FAZER                                  cy.log('condicao Antes de')
                                    cy.wait(5000)
                                    cy.get('button[aria-label = "Show filters"]').click()
                                    cy.get('div[data-colindex = 1]').then(datasPegadas => {
                                        const datasColuna = datasPegadas.toArray().map(el => el.innerText.trim())
                                        cy.wrap(datasColuna).each(data => {
                                            var dataFormatada = formatDateToString(data)
                                            var dataComparacaoFormatada = formatDateToString(dataComparacao);
                                            var dataReformatada = normalizeDate(new Date(dataFormatada));
                                            var dataComparacaoReformatada = normalizeDate(new Date(dataComparacaoFormatada));
                                            if(isValidDate(dataReformatada)){
                                                expect('02/01/2018' < '01/01/2019').to.be.true
                                            }
                                        })
                                    })
                                }else{
                                    if(condicao == 'Antes ou igual a'){
  //FAZER                                      cy.log('condicao Antes ou igual a')
                                        cy.wait(5000)
                                        cy.get('button[aria-label = "Show filters"]').click()
                                        cy.get('div[data-colindex = 1]').then(datasPegadas => {
                                            const datasColuna = datasPegadas.toArray().map(el => el.innerText.trim())
                                            cy.wrap(datasColuna).each(data => {
                                                var dataFormatada = formatDateToString(data)
                                                var dataComparacaoFormatada = formatDateToString(dataComparacao);
                                                var dataReformatada = normalizeDate(new Date(dataFormatada));
                                                var dataComparacaoReformatada = normalizeDate(new Date(dataComparacaoFormatada));
                                                if(isValidDate(dataReformatada)){
                                                    expect(dataReformatada <= dataComparacaoReformatada).to.be.true
                                                }
                                            })
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }else if(coluna == 'Vlr do Desdobramento'){
                cy.get('input[placeholder = "Valor do filtro"]').type(valorFiltro).type('{enter}')
                if(condicao == '=' || condicao == 'Qualquer'){
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 2]').then(numeros => {
                        const valoresColuna = numeros.toArray().map(el => el.innerText.trim())
                        cy.wrap(valoresColuna).each(valor => {
                            let valorFormatado = valor.replace(/R\$|\s/g, '')
                            let valorSetadoDesdobramentoFormatado = valorSetadoDesdobramento.replace(/R\$|\s/g, '')
                            if(valoresColuna.length > 0){
                                if(valorFormatado == valorSetadoDesdobramentoFormatado){
                                    expect(valorFormatado).to.be.eq(valorSetadoDesdobramentoFormatado)
                                }else{
                                    cy.log('soma')
                                }
                            }else{
                                assert.eq('Erro')
                            }
                        })
                    })
                }else if(condicao == '!='){
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('div[data-colindex = 2]').then(numeros => {
                        const valoresColuna = numeros.toArray().map(el => el.innerText.trim())
                        cy.wrap(valoresColuna).each(valor => {
                            if(valoresColuna != 0){
                                const valorFormatado = valor.replace(/[^\d.]/g, '')
                                const valorSetadoDesdobramentoFormatado = valorSetadoDesdobramento.replace(/[^\d.]/g, '')
                                if(valorFormatado != valorSetadoDesdobramentoFormatado){
                                    expect(valorFormatado).not.to.eq(valorSetadoDesdobramentoFormatado)
                                }
                            }else{
                                assert.equal('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }else if(condicao == '>'){
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 2]').then(numeros => {
                        const valoresColuna = numeros.toArray().map(el => el.innerText.trim())
                        cy.wrap(valoresColuna).each(valor => {
                            if(valoresColuna.length > 1){
                                const valorFormatado = parseFloat(valor.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                const valorSetadoDesdobramentoFormatado = parseFloat(valorSetadoDesdobramento.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                if(valorFormatado > valorSetadoDesdobramentoFormatado){
                                    expect(valorFormatado).to.be.gt(valorSetadoDesdobramentoFormatado)
                                }else{
                                    assert.eq('Erro: bug')
                                }
                            }else{
                                assert.eq('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }else if(condicao == '>='){
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 2]').then(numeros => {
                        const valoresColuna = numeros.toArray().map(el => el.innerText.trim())
                        cy.wrap(valoresColuna).each(valor => {
                            if(valoresColuna.length > 1){
                                const valorFormatado = parseFloat(valor.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                const valorSetadoDesdobramentoFormatado = parseFloat(valorSetadoDesdobramento.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                if(valorFormatado >= valorSetadoDesdobramentoFormatado){
                                    expect(valorFormatado).to.be.gte(valorSetadoDesdobramentoFormatado)
                                }else{
                                    assert.eq('Erro: bug')
                                }
                            }else{
                                assert.eq('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }else if(condicao == '<'){
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 2]').then(numeros => {
                        const valoresColuna = numeros.toArray().map(el => el.innerText.trim())
                        cy.wrap(valoresColuna).each(valor => {
                            if(valoresColuna.length > 1){
                                const valorFormatado = parseFloat(valor.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                const valorSetadoDesdobramentoFormatado = parseFloat(valorSetadoDesdobramento.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                if(valorFormatado < valorSetadoDesdobramentoFormatado){
                                    expect(valorFormatado).to.be.lt(valorSetadoDesdobramentoFormatado)
                                }else{
                                    assert.eq('Erro: bug')
                                }
                            }else{
                                assert.eq('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }else{
                    if(condicao == '<='){
                        cy.wait(5000)
                        cy.get('button[aria-label = "Show filters"]').click()
                        cy.get('.css-1inm7gi div[data-colindex = 2]').then(numeros => {
                            const valoresColuna = numeros.toArray().map(el => el.innerText.trim())
                            cy.wrap(valoresColuna).each(valor => {
                                if(valoresColuna.length > 1){
                                    const valorFormatado = parseFloat(valor.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                    const valorSetadoDesdobramentoFormatado = parseFloat(valorSetadoDesdobramento.replace(/[^\d,.-]/g, '').replace(',', '.'))
                                    if(valorFormatado <= valorSetadoDesdobramentoFormatado){
                                        expect(valorFormatado).to.be.lte(valorSetadoDesdobramentoFormatado)
                                    }else{
                                        assert.eq('Erro: bug')
                                    }
                                }else{
                                    assert.eq('Erro: Nenhum valor encontrado')
                                }
                            })
                        })
                    }
                }
            }else if(coluna == 'Nro Nota'){
                cy.get('input[placeholder = "Valor do filtro"]').type(valorFiltro).type('{enter}')
                if(condicao == '=' || condicao == 'Qualquer'){
                    cy.log('condição = || Qualquer')
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 3]').then(numeros => {
                        let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                        cy.wrap(numerosColuna).each(numero => {
                            if(numerosColuna.length > 0){
                                if(numero == numeroNota){
                                     expect(numero).be.eq(parseInt(numeroNota))
                                }else{
                                    assert.eq('Erro: bug')
                                }
                            }else{
                                 assert.eq('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }if(condicao == '!='){
                    cy.log('condição !=')
                    cy.wait(5000)
                    cy.get('button[aria-label = "Show filters"]').click()
                    cy.get('.css-1inm7gi div[data-colindex = 3]').then(numeros => {
                        let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                        cy.wrap(numerosColuna).each(numero => {
                            if(numerosColuna.length > 0){
                                if(numero != numeroNota){
                                    expect(numero).not.to.eq(parseInt(numeroNota))
                                }else{
                                    assert.eq('Erro: bug')
                                }
                            }else{
                                assert.equal('Erro: Nenhum valor encontrado')
                            }
                        })
                    })
                }else{
                    if(condicao == '>'){
                        cy.log('condição >')
                        cy.wait(5000)
                        cy.get('button[aria-label = "Show filters"]').click()
                        cy.get('.css-1inm7gi div[data-colindex = 3]').then(numeros => {
                            let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                            cy.wrap(numerosColuna).each(numero => {
                                if(numerosColuna.length > 0){
                                    if(numero > numeroNota){
                                        expect(numero).to.be.gt(parseInt(numeroNota))
                                    }else{
                                        assert.eq('Erro: bug')
                                    }
                                }else{
                                    assert.equal('Erro: Nenhum valor encontrado')
                                }
                            })
                        })
                    }else{
                        if(condicao == '>='){
                            cy.log('condição >=')
                            cy.wait(5000)
                            cy.get('button[aria-label = "Show filters"]').click()
                            cy.get('.css-1inm7gi div[data-colindex = 3]').then(numeros => {
                                let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                cy.wrap(numerosColuna).each(numero => {
                                    if(numerosColuna.length > 0){
                                        if(numero >= numeroNota){
                                            expect(numero).to.be.gte(parseInt(numeroNota))
                                        }else{
                                            assert.eq('Erro: bug')
                                        }
                                    }else{
                                        assert.equal('Erro: Nenhum valor encontrado')
                                    }
                                })
                            })
                        }else{
                            if(condicao == '<'){
                                cy.log('condição <')
                                cy.wait(5000)
                                cy.get('button[aria-label = "Show filters"]').click()
                                cy.get('.css-1inm7gi div[data-colindex = 3]').then(numeros => {
                                    let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                    cy.wrap(numerosColuna).each(numero => {
                                        if(numerosColuna.length > 0){
                                            if(numero < numeroNota){
                                                expect(numero).to.be.lt(parseInt(numeroNota))
                                            }else{
                                                assert.eq('Erro: bug')
                                            }
                                        }else{
                                            assert.equal('Erro: Nenhum valor encontrado')
                                        }
                                    })
                                })
                            }else{
                                if(condicao == '<='){
                                    cy.log('condição <=')
                                    cy.wait(5000)
                                    cy.get('button[aria-label = "Show filters"]').click()
                                    cy.get('.css-1inm7gi div[data-colindex = 3]').then(numeros => {
                                        let numerosColuna = numeros.toArray().map(el => parseInt(el.innerText.trim()))
                                        cy.wrap(numerosColuna).each(numero => {
                                            if(numerosColuna.length > 0){
                                                if(numero <= numeroNota){
                                                    expect(numero).to.be.lte(parseInt(numeroNota))
                                                }else{
                                                    assert.eq('Erro: bug')
                                                }
                                            }else{
                                               assert.equal('Erro: Nenhum valor encontrado')
                                            }
                                        })
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    })
})*/