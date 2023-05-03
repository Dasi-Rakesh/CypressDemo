class CheckoutPage {

  static firstnameField = () => cy.get(`#firstNameInput`).should('be.visible');
  static lastnameField = () => cy.get(`#lastNameInput`).should('be.visible');
  static addressField = () => cy.get(`#addressLine1Input`).should('be.visible');
  static stateField = () => cy.get(`#provinceInput`).should('be.visible');
  static postalCodeField = () => cy.get(`#postCodeInput`).should('be.visible');
  static submitButton = () => cy.get(`#checkout-shipping-continue`).should('be.visible');
  static confirmationMessage = () => cy.get('[data-test="shipping-address-heading"]').should('be.visible');

  static addAddressDetails(fName, lName, address, state, pincode) {
    this.firstnameField().type(fName);
    this.lastnameField().type(lName);
    this.addressField().type(address);
    this.stateField().type(state);
    this.postalCodeField().type(pincode);
    this.submitButton().click();
  }

  static verifyOrder(){
    this.confirmationMessage().should('include.text', 'Your Order has been successfully placed');
  }
}
export default CheckoutPage;
