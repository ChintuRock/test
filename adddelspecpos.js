// Existing array
var array = [1, 2, 3, 4, 5];

// Function to add an element at a specific position
function addElement(array, element, position) {
  array.splice(position, 0, element);
  return array;
}

// Function to delete an element at a specific position
function deleteElement(array, position) {
  array.splice(position, 1);
  return array;
}

// Test adding an element at position 2
var newArray = addElement(array, 10, 2);


// Test deleting an element at position 4
newArray = deleteElement(newArray, 4);
console.log(newArray); // [1, 2, 10, 3, 5]