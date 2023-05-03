class OrdersPage {

  static product = (label) => cy.xpath(`//p[text()='${label}']/parent::div/child::div[text()='Add to cart']`);
  static checkoutButton = () => cy.xpath(`//div[text()='Checkout']`).should('be.visible');

  static addProduct(label) {
    this.product(label).click({ force: true });    
  }

  static clickCheckoutButton(){
    this.checkoutButton().click();
  }
}
export default OrdersPage;
