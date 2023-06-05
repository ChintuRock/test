// Create a Map
var myMap = new Map();

// Add key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("country", "USA");

// Create an Object
var myObject = {
  name: "John",
  age: 30,
  country: "USA",
};

// Measure the time taken to add a key-value pair to the Map
var mapStartTime = performance.now();
myMap.set("city", "New York");
var mapEndTime = performance.now();
var mapAddTime = mapEndTime - mapStartTime;

// Measure the time taken to add a key-value pair to the Object
var objectStartTime = performance.now();
myObject.city = "New York";
var objectEndTime = performance.now();
var objectAddTime = objectEndTime - objectStartTime;

console.log("Map add time: " + mapAddTime + "ms");
console.log("Object add time: " + objectAddTime + "ms");

// Measure the time taken to remove a key-value pair from the Map
var mapRemoveStartTime = performance.now();
myMap.delete("country");
var mapRemoveEndTime = performance.now();
var mapRemoveTime = mapRemoveEndTime - mapRemoveStartTime;

// Measure the time taken to remove a key-value pair from the Object
var objectRemoveStartTime = performance.now();
delete myObject.country;
var objectRemoveEndTime = performance.now();
var objectRemoveTime = objectRemoveEndTime - objectRemoveStartTime;

console.log("Map remove time: " + mapRemoveTime + "ms");
console.log("Object remove time: " + objectRemoveTime + "ms");