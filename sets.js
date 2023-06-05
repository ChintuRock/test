// Create a new Set
var mySet = new Set();

// Add values to the Set
mySet.add(10);
mySet.add("Hello");
mySet.add(true);
mySet.add(3.14);

// Retrieve a value from the Set
var value = 10;
if (mySet.has(value)) {
  console.log(value + " is present in the Set");
} else {
  console.log(value + " is not present in the Set");
}

// Iterate over the Set
console.log("Values in the Set:");
mySet.forEach(function (element) {
  console.log(element);
});