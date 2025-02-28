describe('Delete Customer Test', () => {
    it('Should delete the customer successfully', () => {
        // Step 1: Visit the page
        cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme');

        // Step 2: Change the "Select version" dropdown to "Bootstrap V4 Theme"
        cy.get('#switch-version-select').select('Bootstrap V4 Theme');

        // Step 3: Click the "Search Name" column and type the name "Test Customer"
        cy.get('input[name="customerName"]').type('Test Customer'); // Search for the customer by name

        // Step 4: Find the row with "Test Customer" and click the checkbox
        cy.contains('Test Customer') // Locate the cell with the name "Test Customer"
          .parents('tr') // Find the row in the table
          .find('input[type="checkbox"]') // Find the checkbox
          .check(); // Check the checkbox

        // Step 5: Click the "Delete" button to delete the selected items
        cy.get('.delete-selected-button').click(); // Click the delete button

        // Step 6: Validate the popup text "Are you sure that you want to delete this 1 item?"
        cy.get('.modal-body') // Find the confirmation modal body
          .should('contain', 'Are you sure that you want to delete this 1 item?'); // Validate the popup text

        // Step 7: Click the "Delete" button in the confirmation popup
        cy.get('.delete-multiple-confirmation-button').click(); // Click the "Delete" button in the confirmation modal

        // Step 8: Wait for the success message and validate the text
        cy.get('div[data-growl="container"]', { timeout: 10000 }) // Wait for up to 10 seconds for the success message
          .should('be.visible') // Ensure the message is visible
          .and('contain', 'Your data has been successfully deleted from the database.'); // Check the success message text

        // Step 9: Close the browser
        cy.window().then((win) => win.close()); // Close the browser
    });
});
