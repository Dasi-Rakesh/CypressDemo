class LoginPage {

  static usernameField = () => cy.get(`#username`).should('be.visible');
  static passwordField = () => cy.get('#password').should('be.visible');
  static logInButton = () => cy.get('#login-btn').should('be.visible');
  static logOutButton = () => cy.get('#logout').should('be.visible');

  static logingToWebSite(username, password) {
    this.usernameField().click({ force: true }).type(username + "{enter}");
    this.passwordField().click({ force: true }).type(password + "{enter}");
    this.logInButton().click();
  }
}
export default LoginPage;
