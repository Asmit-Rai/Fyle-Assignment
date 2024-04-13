function checkInputs() {
    var annualIncome = document.getElementById('exampleInputEmail4').value;
    var extraIncome = document.getElementById('exampleInputEmail5').value;
    var age = document.getElementById('exampleInputEmail3').value;
    var deduction = document.getElementById('exampleInputEmail7').value;

    if (!annualIncome || !extraIncome || !age || !deduction) {
        alert("Please fill in all fields.");
        return false; 
    }
    return true;
}

function goto() {
    if (!checkInputs()) {
        return; 
    }

    var annualIncomeValue = parseFloat(document.getElementById('exampleInputEmail4').value);
    var extraIncomeValue = parseFloat(document.getElementById('exampleInputEmail5').value);
    var ageValue = parseInt(document.getElementById('exampleInputEmail3').value);
    var deductionValue = parseFloat(document.getElementById('exampleInputEmail7').value);


    var overallIncome = annualIncomeValue + extraIncomeValue - deductionValue;
    var taxRate = 0;
    var taxableIncome = 0;

    if (overallIncome > 800000) {
        taxableIncome = overallIncome - 800000;
        if (ageValue < 40) {
            taxRate = 0.3; 
        } else if (ageValue >= 40 && ageValue < 60) {
            taxRate = 0.4; 
        } else {
            taxRate = 0.1;
        }
    }
    var taxAmount = taxableIncome * taxRate;
    var total_income = overallIncome - taxAmount;
    localStorage.setItem('total_income', total_income);
    localStorage.setItem('taxAmount', taxAmount);
    window.location.href = 'result.html';
}
