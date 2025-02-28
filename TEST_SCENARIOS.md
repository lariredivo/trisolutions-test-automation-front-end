# 📌 Test Scenarios (BDD - Gherkin)

This document outlines the test scenarios for **Front-End** automation using BDD (Gherkin syntax).

---

## **Front-End Test Scenarios (UI - Cypress)**


```gherkin
Feature: Add a new customer

  Scenario: Successfully adding a new customer
    Given I access the "https://www.grocerycrud.com/v1.x/demo/bootstrap_theme" page
    When I select "Bootstrap V5 Theme" from the "Select version" dropdown
    And I click on the "Add Customer" button
    And I fill out the customer form with random data
    And I click the "Save" button
    Then I should see a success message "Your data has been successfully stored into the database. Edit Customer or Go back to list"
    And I close the browser

Feature: Delete an existing customer

  Scenario: Successfully deleting a customer
    Given I access the "https://www.grocerycrud.com/v1.x/demo/bootstrap_theme" page
    When I select "Bootstrap V4 Theme" from the "Select version" dropdown
    And I search for the recently created customer in the "Search Name" field
    And I select the customer checkbox
    And I click the "Delete" button
    Then I should see a confirmation popup with the message "Are you sure that you want to delete this 1 item?"
    When I confirm by clicking "Delete" in the popup
    Then I should see a success message "Your data has been successfully deleted from the database."
    And I close the browser
