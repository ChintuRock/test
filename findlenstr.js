// Arrow function that prompts for the length of each string in the array
const getLengthStrings = (arr) => {
  const lengthStrings = [];

  for (let i = 0; i < arr.length; i++) {
    const length = prompt(`Enter the length of string '${arr[i]}':`);
    lengthStrings.push(length);
  }

  return lengthStrings;
};

// Example usage
const strings = ["Hello", "World", "JavaScript"];
const result = getLengthStrings(strings);
console.log(result);