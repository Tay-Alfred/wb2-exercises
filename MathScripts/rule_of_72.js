// interest rate
var interestRate = 8;
// Number of years it will take for the investment to double in value
var yearsToDouble = Math.log2(2) *(72 / interestRate);

console.log("At a " + interestRate + " interest rate, your savings account will be worth " + yearsToDouble + " in 2 years.");