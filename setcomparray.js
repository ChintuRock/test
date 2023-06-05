// Create a Set
var mySet = new Set();

// Add values to the Set
mySet.add(10);
mySet.add(20);
mySet.add(30);

// Create an Array
var myArray = [10, 20, 30];

// Search for a value in the Set
var valueSet = 20;
var setStartTime = performance.now();
var isValueInSet = mySet.has(valueSet);
var setEndTime = performance.now();
var setSearchTime = setEndTime - setStartTime;

// Search for a value in the Array
var valueArray = 20;
var arrayStartTime = performance.now();
var isValueInArray = myArray.includes(valueArray);
var arrayEndTime = performance.now();
var arraySearchTime = arrayEndTime - arrayStartTime;

console.log("Value " + valueSet + " in Set: " + isValueInSet);
console.log("Value " + valueArray + " in Array: " + isValueInArray);
console.log("Set search time: " + setSearchTime + "ms");
console.log("Array search time: " + arraySearchTime + "ms");