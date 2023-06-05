// Prompt the user to enter a string
var inputString = prompt("Enter a string:");

// Function to count the number of words in a string
function countWords(str) {
  // Remove leading and trailing whitespace
  str = str.trim();
  
  // If the string is empty, return 0
  if (str === "") {
    return 0;
  }
  
  // Split the string by whitespace to get an array of words
  var words = str.split(" ");
  
  // Return the length of the words array
  return words.length;
}

// Call the function with the input string as the parameter
var wordCount = countWords(inputString);

// Display the word count using an alert
alert("The number of words in the string is: " + wordCount);