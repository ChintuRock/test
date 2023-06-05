// Get the input text box element
var inputBox = document.getElementById("inputBox");

// Add event listener for the "input" event
inputBox.addEventListener("input", function() {
  // Get the input value
  var inputString = inputBox.value;

  // Remove any non-alphabetic characters from the string
  var cleanString = inputString.replace(/[^A-Za-z]/g, '');

  // Sort the letters in alphabetical order
  var sortedString = cleanString.split('').sort().join('');

  // Display the sorted string in the result element
  var resultElement = document.getElementById("result");
  resultElement.innerText = sortedString;
});
