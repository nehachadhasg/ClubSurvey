/*import { test, expect } from '@playwright/test';
import { ExamplePage } from '../pages/examplePage';

test.describe('Example Test Suite', () => {
    let examplePage: ExamplePage;

    test.beforeEach(async ({ page }) => {
        examplePage = new ExamplePage(page);
        await examplePage.navigate();
    });

    test('should fill out the form and submit', async () => {
        await examplePage.fillForm({
            name: 'John Doe',
            email: 'john.doe@example.com',
        });
        await examplePage.submitForm();
        const successMessage = await examplePage.getSuccessMessage();
        expect(successMessage).toBe('Form submitted successfully!');
    });

    test('should display an error message for invalid email', async () => {
        await examplePage.fillForm({
            name: 'Jane Doe',
            email: 'invalid-email',
        });
        await examplePage.submitForm();
        const errorMessage = await examplePage.getErrorMessage();
        expect(errorMessage).toBe('Please enter a valid email address.');
    });
});
*/