function countVowels(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
    
    // Variable to store the count of vowels
    var count = 0;
    
    // Iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
      // Check if the character is a vowel
      if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        count++;
      }
    }
    
    // Display the count of vowels using an alert
    alert("The number of vowels in the string is: " + count);
  }
  
  // Prompt the user to enter a string
  var inputString = prompt("Enter a string:");
  
  // Call the function with the input string as the parameter
  countVowels(inputString);