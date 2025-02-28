# Test Scenarios (BDD - Gherkin)

This document outlines the test scenarios for **Front-End** automation using BDD (Gherkin syntax).

---

```gherkin
Feature: Customer Management
  As a user of the Grocery CRUD system
  I want to add and remove customers
  So that I can manage customer records efficiently

  Scenario: Add a new customer
    Given I access the Grocery CRUD application
    When I switch the theme to "Bootstrap V5"
    And I fill in the customer details with valid information
    And I save the new customer
    Then I should see a success message confirming the customer was added

  Scenario: Remove an existing customer
    Given I access the Grocery CRUD application
    When I switch the theme to "Bootstrap V4"
    And I search for the newly created customer
    And I select and delete the customer
    Then I should see a confirmation message stating the customer was removed
