describe('Parceiro Frontend - Deve verificar as ordenações dos registros de produtos', () => {

    it('teste ordenação registro produtos', () => {
        cy.loginParceiro()
        cy.wait(30000)
        cy.get('span[style = "white-space: nowrap;"]').contains('Ordenar por:').click()
        cy.wait(2500)
        cy.get('li[tabindex = "-1"]').contains('Código').click()
        cy.wait(2500)
        cy.get('.css-ufh3q6 .css-10ygcul').click().type('{esc}')
        cy.wait(2500)
        cy.get('.css-1stnzi4 .css-iltd6 h6.css-yemnbq').then(numeros => {
            if(numeros.length > 1){
                for(let i = 0; i < numeros.length - 1; i++){
                    const numeroAtual = parseInt(numeros.eq(i).text())
                    const proximoNumero = parseInt(numeros.eq(i + 1).text())
                    expect(numeroAtual).be.gt(proximoNumero)
                }
            }else{
                assert.equal('Erro: Nenhum valor encontrado')
            }
        })
    })
})