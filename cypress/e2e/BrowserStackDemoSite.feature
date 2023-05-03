Feature: BrowserStack Demo Site

  @e2e
  Scenario: Verify if User is able to place the Order
    Given I navigate to website
    And I SignIn as "fav_user" with "testingisfun99" password
    And I add "iPhone 12" to cart
    When I click checkout and add the shipping address and submit the details
      | FirstName | LastName | Address  | State     | PostalCode |
      | Demo      | User     | H.no 123 | Telangana | 500019     |
    Then I Verify Order placed successfully
    