let householdTotal = 0;
let businessTotal = 0;
let schoolTotal = 0;
let rentTotal = 0;
let groceryTotal = 0;
let utilityTotal = 0;

function calculateBudget() {
    const purpose = document.getElementById('purpose').value;
    const daily = parseFloat(document.getElementById('daily').value) || 0;
    const weekly = parseFloat(document.getElementById('weekly').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly').value) || 0;

    // Convert all to monthly amounts
    const dailyMonthly = daily * 30;
    const weeklyMonthly = weekly * 4;
    const total = dailyMonthly + weeklyMonthly + monthly;

    switch(purpose) {
        case 'household':
            householdTotal += total;
            break;
        case 'business':
            businessTotal += total;
            break;
        case 'school':
            schoolTotal += total;
            break;
        case 'rent':
            rentTotal += total;
            break;
        case 'grocery':
            groceryTotal += total;
            break;
        case 'utility':
            utilityTotal += total;
            break;
    }

    updateDisplay();
    clearInputs();
}

function updateDisplay() {
    document.getElementById('totalHousehold').textContent = householdTotal.toFixed(2);
    document.getElementById('totalBusiness').textContent = businessTotal.toFixed(2);
    document.getElementById('totalMonthly').textContent = (
        householdTotal + 
        businessTotal + 
        schoolTotal + 
        rentTotal + 
        groceryTotal + 
        utilityTotal
    ).toFixed(2);
}

function clearInputs() {
    document.getElementById('daily').value = '';
    document.getElementById('weekly').value = '';
    document.getElementById('monthly').value = '';
}
