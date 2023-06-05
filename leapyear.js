// Prompt the user to enter the range of years
var startYear = parseInt(prompt("Enter the starting year:"));
var endYear = parseInt(prompt("Enter the ending year:"));

// Function to check if a year is a leap year
function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4 and not divisible by 100,
  // except if it is also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Find and display the leap years within the range
var leapYears = [];
for (var year = startYear; year <= endYear; year++) {
  if (isLeapYear(year)) {
    leapYears.push(year);
  }
}

// Display the leap years
if (leapYears.length > 0) {
  document.write("Leap years between " + startYear + " and " + endYear + ": " + leapYears.join(", "));
} else {
  document.write("No leap years found in the given range.");
}