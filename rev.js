// Arrow function to reverse a given number
const reverseNumber = (number) => {
    const reversedString = number.toString().split("").reverse().join("");
    return parseInt(reversedString);
  };
  
  // Test the reverseNumber function
  const givenNumber = 12243;
  const reversedNumber = reverseNumber(givenNumber);
  console.log(reversedNumber); // Output: 34221