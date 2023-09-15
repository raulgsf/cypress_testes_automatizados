const url = Cypress.env('portalUrlFrontEnd')
const userParceiro = Cypress.env('userParceiro')
const passwordParceiro = Cypress.env('passwordParceiro')
const tempo = Cypress.env('timeout')

Cypress.Commands.add('loginParceiro', () => {
    cy.visit(url)
    cy.get('input[name = "username"]', { timeout: tempo }).type(userParceiro)
    cy.get('input[name = "password"]', { timeout: tempo }).type(passwordParceiro)
    cy.get('button[type = "submit"]', { timeout: tempo }).click()
})

const userVendedor = Cypress.env('userVendedor')
const passwordVendedor = Cypress.env('passwordVendedor')

Cypress.Commands.add('loginVendedor', () => {
    cy.visit(url)
    cy.get('input[name = "username"]', { timeout: tempo }).type(userVendedor)
    cy.get('input[name = "password"]', { timeout: tempo }).type(passwordVendedor)
    cy.get('button[type = "submit"]', { timeout: tempo }).click()
})

Cypress.Commands.add('loginParceiroBackend', () => {
  const url = Cypress.env('portalUrlBackEnd');
  const user = Cypress.env('userParceiro');
  const password = Cypress.env('passwordParceiro');
  const ingress = Cypress.env('origin');

  if(Cypress.env('accessTokenParceiro') == '' ) {
    cy.request({
        method: 'POST',
        body: {
          usuario: user,
          senha: password,
        },
        url: url + '/api/oauth/token',
        headers: {
          'X-Zdn-Ingress': ingress,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.have.property('accessToken');
        expect(response.body).to.have.property('refreshToken');

        const accessToken = response.body.accessToken;
        Cypress.env('accessTokenParceiro', accessToken);
      });
  }
});

Cypress.Commands.add('loginVendedorBackend', () => {
  const url = Cypress.env('portalUrlBackEnd');
  const user = Cypress.env('userVendedor');
  const password = Cypress.env('passwordVendedor');
  const ingress = Cypress.env('origin');

  if(Cypress.env('accessTokenVendedor') == '') {
    cy.request({
        method: 'POST',
        body: {
          usuario: user,
          senha: password,
        },
        url: url + '/api/oauth/token',
        headers: {
          'X-Zdn-Ingress': ingress,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.have.property('accessToken');
        expect(response.body).to.have.property('refreshToken');

        const accessToken = response.body.accessToken;
        Cypress.env('accessTokenVendedor', accessToken);
      });
  }
});

