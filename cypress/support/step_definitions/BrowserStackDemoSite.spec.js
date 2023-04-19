const { Given, Then, And, When } = require("cypress-cucumber-preprocessor/steps");
require("cypress-xpath");
import LoginPage from "../pages/login.page";
import OrdersPage from "../pages/orders.page";
import CheckoutPage from "../pages/checkout.page"

Given("I navigate to website", () => {
  cy.visit(Cypress.config().baseUrl + "signin");
});

And("I SignIn as {string} with {string} password", (username, password) => {
  LoginPage.logingToWebSite(username, password);
});


And("I add {string} to cart", (product) => {
  OrdersPage.addProduct(product);
});

When("I click checkout and add the shipping address and submit the details", (dataTable) => {
  cy.wait(2000);
  OrdersPage.clickCheckoutButton();
  dataTable.hashes().forEach((element) => {
    cy.wait(2000);
    CheckoutPage.addAddressDetails(element.FirstName, element.LastName, element.Address, element.State, element.PostalCode);
  });
  cy.wait(2000);
});

Then("I Verify Order placed successfully", () => {
  CheckoutPage.confirmationMessage().should('include.text', 'Your Order has been successfully placed');
});
