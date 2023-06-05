// Prompt the user to enter a number
var limit = prompt("Enter a number:");

// Convert the input string to a number
limit = parseInt(limit);

// Variable to store the result
var result = "";

// Iterate from 1 to the entered limit
for (var i = 1; i <= limit; i++) {
  // Calculate the square of the current number
  var square = i * i;
  
  // Add the number and its square to the result string
  result += i + " -> " + square + "\n";
}

// Display the result using an alert box
alert(result);