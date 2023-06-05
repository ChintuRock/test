// Create a new Map
var myMap = new Map();

// Add values to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("country", "USA");

// Retrieve a value from the Map using key
var key = "age";
if (myMap.has(key)) {
  console.log("Value for key '" + key + "': " + myMap.get(key));
} else {
  console.log("No value found for key '" + key + "'");
}

// Iterate over the Map
console.log("Key-value pairs in the Map:");
myMap.forEach(function (value, key) {
  console.log(key + ": " + value);
});