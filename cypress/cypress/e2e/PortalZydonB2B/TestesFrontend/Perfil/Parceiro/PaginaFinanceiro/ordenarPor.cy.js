/*describe('Parceiro - Deve ser capaz de ordenar os registros por algum critério específico do usuário', () => {

    const tempo = Cypress.env('timeout')
    const filtro = Cypress.env('ordenarPorFinanceiro')

    it('Deve ordenar por algum critério', () => {
        cy.loginParceiro()
        cy.wait(15000)

        //acessa Financeiro
        cy.get('button.css-9dkv4a', { timeout: tempo }).click()
        cy.get('div[depth = "1"]').contains('Financeiro', { timeout: tempo }).click()
        cy.wait(15000)

        cy.get('button[type = "button"]', { timeout: tempo }).contains('Ordenar por:').click()
        cy.get('li[tabindex = "-1"]').contains(filtro).click()

        if(filtro == 'Nro Único'){
            cy.log('Nro Único')
            cy.get('.css-1inm7gi div[data-colindex = "0"]').then(numeroUnico => {
                let valores = numeroUnico.toArray().map(el => parseInt(el.innerText.trim()))
                cy.wrap(valores).each((index, lista) => {
                    if(lista.length > 1){
                        if(index < lista.length - 1){
                            let valorAtual = lista[index]
                            let valorProximo = lista[index + 1]
                            expect(valorAtual).to.be.lt(valorProximo)
                        }else{
                            cy.log('ordem crescente')
                        }
                    }else{
                        assert.equal('Nenhum valor encontrado')
                    }
                })
            })
            cy.get('button[type = "button"]', { timeout: tempo }).contains('Ordenar por:').click()
            cy.get('.MuiPaper-root > .MuiStack-root > .css-10ygcul').click()
            cy.wait(5000)

            cy.get('.css-1inm7gi div[data-colindex = "3"]').then(numeroNota => {
                let valores = numeroNota.toArray().map(el => parseInt(el.innerText.trim()))
                cy.wrap(valores).each((index, lista) => {
                    if(lista.length > 1){
                        if(index < lista.length - 1){
                            let valorAtual = lista[index]
                            let valorProximo = lista[index + 1]
                            expect(valorAtual).to.be.gt(valorProximo)
                        }else{
                            cy.log('ordem decrescente')
                        }
                    }else{
                        assert.equal('Nenhum valor encontrado')
                    }
                })
            })
        }else if(filtro == 'Nro Nota'){
            cy.get('.css-1inm7gi div[data-colindex = "3"]').then(numeroNota => {
                let valores = numeroNota.toArray().map(el => parseInt(el.innerText.trim()))
                cy.wrap(valores).each((index, lista) => {
                    if(lista.length > 1){
                        if(index < lista.length - 1){
                            let valorAtual = lista[index]
                            let valorProximo = lista[index + 1]
                            expect(valorAtual).to.be.lt(valorProximo)
                        }else{
                            cy.log('ordem crescente')
                        }
                    }else{
                        assert.equal('Nenhum valor encontrado')
                    }
                })
            })

            cy.get('button[type = "button"]', { timeout: tempo }).contains('Ordenar por:').click()
            cy.get('.MuiPaper-root > .MuiStack-root > .css-10ygcul').click()
            cy.wait(5000)

            cy.get('.css-1inm7gi div[data-colindex = "3"]').then(numeroUnico => {
                let valores = numeroUnico.toArray().map(el => parseInt(el.innerText.trim()))
                cy.wrap(valores).each((index, lista) => {
                    if(lista.length > 1){
                        if(index < lista.length - 1){
                            let valorAtual = lista[index]
                            let valorProximo = lista[index + 1]
                            expect(valorAtual).to.be.gt(valorProximo)
                        }else{
                            cy.log('ordem decrescente')
                        }
                    }else{
                        assert.equal('Nenhum valor encontrado')
                    }
                })
            })
        }else if(filtro == 'Vlr do Desdobramento'){
            cy.get('.css-1inm7gi div[data-colindex = "2"]').then(vlr => {
                let valores = vlr.toArray().map(el => el.innerText.trim())
                cy.wrap(valores).each((index) => {
                    if(valores.length > 1){
                        if(index < valores.length - 1){
                            const valorAtualFormatado = parseFloat(index.replace(/[^\d,.-]/g, '').replace(',', '.'))
                            const valorProximoFormatado = parseFloat(index.replace(/[^\d,.-]/g, '').replace(',', '.'))
                            const valorAtual = valorAtualFormatado[index]
                            const valorProximo = valorProximoFormatado[index + 1]
                            cy.log(valorAtualFormatado)
                            cy.log(valorProximoFormatado)
                            expect(parseFloat(valorAtual)).to.be.lt(parseFloat(valorProximo))
                        }else{
                            cy.log('ordem crescente')
                        }
                    }else{
                        assert.equal('Nenhum valor encontrado')
                    }
                })
            })

            cy.get('button[type = "button"]', { timeout: tempo }).contains('Ordenar por:').click()
            cy.get('.MuiPaper-root > .MuiStack-root > .css-10ygcul').click()
            cy.wait(5000)

            cy.get('.css-1inm7gi div[data-colindex = "2"]').then(vlr => {
                let valores = vlr.toArray().map(el => el.innerText.trim())
                cy.wrap(valores).each((index, lista) => {
                    if(lista.length > 1){
                        if(index < lista.length - 1){
                            let valorAtual = lista[index]
                            let valorProximo = lista[index + 1]
                            expect(valorAtual).to.be.gt(valorProximo)
                        }else{
                            cy.log('ordem decrescente')
                        }
                    }else{
                        assert.equal('Nenhum valor encontrado')
                    }
                })
            })
        }else if(filtro == 'Dt. Vencimento'){
        ///fazer
        }
    })
})*/