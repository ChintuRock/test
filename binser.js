// Function to add elements to an array using prompt
function addElementsToArray() {
    let array = [];
    let numElements = parseInt(prompt("Enter the number of elements you want to add:"));
  
    for (let i = 0; i < numElements; i++) {
      let element = parseInt(prompt(`Enter element ${i + 1}:`));
      array.push(element);
    }
  
    return array;
  }
  
  // Function to perform binary search on a sorted array
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (array[mid] === target) {
        return mid; // Element found at index mid
      } else if (array[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Element not found
  }
  
  // Main program
  let elements = addElementsToArray();
  let target = parseInt(prompt("Enter the element to search for:"));
  
  elements.sort((a, b) => a - b); // Sort the array in ascending order
  
  let index = binarySearch(elements, target);
  
  if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
  } else {
    console.log(`Element ${target} not found in the array.`);
  }
  