describe('Add Customer', () => {
    it('Should successfully add a new customer', () => {
        // Visit the page
        cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme');

        // Select Bootstrap V5 Theme from the dropdown
        cy.get('#switch-version-select').select('Bootstrap V5 Theme');

        // Click the "Add Customer" button
        cy.contains('Add Customer').click();

        // Fill out the customer form with random data
        cy.get('[name="customerName"]').type('Test Customer');
        cy.get('[name="contactLastName"]').type('Smith');
        cy.get('[name="contactFirstName"]').type('John');
        cy.get('[name="phone"]').type('123456789');
        cy.get('[name="addressLine1"]').type('123 Main St');
        cy.get('[name="addressLine2"]').type('Apt 4B');
        cy.get('[name="city"]').type('New York');
        cy.get('[name="state"]').type('NY');
        cy.get('[name="postalCode"]').type('10001');
        cy.get('[name="country"]').type('USA');

        // Select "Bondur" from the "From Employer" dropdown
        cy.get('.chosen-single').click(); // Open the dropdown
        cy.get('.chosen-results li').contains('Bondur').click(); // Select "Bondur"

        // Enter credit limit
        cy.get('[name="creditLimit"]').type('5000');

        // Click the "Save and Go Back to List" button
        cy.get('#save-and-go-back-button').click();

        // Wait for success message to appear
        cy.get('span[data-growl="message"]', { timeout: 10000 }) // Wait up to 10s
          .should('be.visible') // Ensure visibility
          .and('contain', 'Your data has been successfully stored into the database.'); // Validate text
    });
});
