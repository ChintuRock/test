// Prompt the user to enter a number
var number = prompt("Enter a number:");

// Convert the input string to a number
number = parseInt(number);

// Check if the number is odd or even
if (number % 2 === 0) {
  alert(number + " is an even number.");
} else {
  alert(number + " is an odd number.");
}