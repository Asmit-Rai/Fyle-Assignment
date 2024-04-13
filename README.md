# Income Tax Calculator

This is a simple web application that calculates income tax based on user input. It takes into account annual income, extra income, age, and deductions to calculate the taxable income and the corresponding tax amount.

## Features

- Input fields for annual income, extra income, age, and deductions.
- Validation to ensure all fields are filled before calculation.
- Calculation of taxable income and tax amount based on the provided inputs.
- Redirect to a results page displaying the total income and tax amount.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.
3. Fill in the required fields: annual income, extra income, age, and deductions.
4. Click on the "Calculate" button to see the results.
5. You will be redirected to the results page where the total income and tax amount will be displayed.

## Functionality

The main functionalities of the application are implemented in JavaScript:

- **checkInputs():** This function ensures that all input fields are filled before proceeding with the calculation. If any field is empty, an alert is displayed prompting the user to fill in all fields.

- **goto():** This function is called when the user clicks on the "Calculate" button. It first checks if all inputs are valid using the `checkInputs()` function. If all inputs are valid, it retrieves the values from the input fields, calculates the taxable income and tax amount based on the provided formula, and then stores the results in the local storage. Finally, it redirects the user to the results page.
- **Popover Messages:** Popover messages are displayed when input values are invalid or do not meet certain criteria.
- **Validation:** Input fields for age, annual income, extra income, and deductions are validated to ensure they contain valid values.
- **Calculation:** Once all inputs are valid, the application calculates the taxable income and tax amount based on the provided formula.
## Screenshots

![Screenshot of the Income Tax Calculator](screenshot1.png)
![Screenshot of the Income Tax Calculator](screenshot2.png)
![Screenshot of the Income Tax Calculator](screenshot3.png)
![Screenshot of the Income Tax Calculator](screenshot4.png)

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

