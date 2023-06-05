// Prompt the user to enter a number
var number = prompt("Enter a number:");

// Convert the input string to a number
number = parseInt(number);

// Variable to store the sum of digits
var sum = 0;

// Loop through each digit of the number
while (number !== 0) {
  // Get the last digit
  var digit = number % 10;
  
  // Add the digit to the sum
  sum += digit;
  
  // Remove the last digit from the number
  number = Math.floor(number / 10);
}

// Output the sum of digits using document.write
document.write("The sum of digits is: " + sum)