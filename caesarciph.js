// Prompt the user to enter the text to encrypt
var plaintext = prompt("Enter the text to encrypt:");

// Prompt the user to enter the shift pattern
var shiftPattern = prompt("Enter the shift pattern (a positive integer):");

// Convert the shift pattern to a number
var shift = parseInt(shiftPattern) % 26; // Limit the shift pattern to a maximum of 25 to optimize the calculation

// Function to encrypt the text using Caesar cipher
function encryptCaesar(text, shift) {
  // Convert the text to uppercase
  var uppercaseText = text.toUpperCase();

  // Variable to store the encrypted text
  var encryptedText = "";

  // Iterate through each character in the text
  for (var i = 0; i < uppercaseText.length; i++) {
    var currentChar = uppercaseText[i];
    
    // Check if the character is a letter
    if (currentChar.match(/[A-Z]/)) {
      // Get the ASCII code of the character
      var charCode = uppercaseText.charCodeAt(i);
      
      // Apply the shift pattern to the ASCII code
      var shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
      
      // Convert the shifted ASCII code back to a character
      var encryptedChar = String.fromCharCode(shiftedCharCode);
      
      // Add the encrypted character to the encrypted text
      encryptedText += encryptedChar;
    } else {
      // If the character is not a letter, add it as it is
      encryptedText += currentChar;
    }
  }

  // Return the encrypted text
  return encryptedText;
}

// Encrypt the plaintext using the shift pattern
var ciphertext = encryptCaesar(plaintext, shift);

// Display the encrypted text using an alert
alert("Encrypted Text: " + ciphertext);