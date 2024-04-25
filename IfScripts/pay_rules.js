const payRate = 17.3; 

const hoursWorked = 45;

// Calculate gross pay

if (hoursWorked <= 40) {
  grossPay = payRate * hoursWorked;
} else {
  const regularHours = 40;

  const overtimeHours = hoursWorked - regularHours;

  grossPay = payRate * regularHours + payRate * 1.5 * overtimeHours;
}

console.log(`Gross pay: $${grossPay.toFixed(2)}`);
