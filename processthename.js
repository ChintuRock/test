// Prompt the user to enter the name
var name = prompt("Enter the name:");

// Process the name
var nameParts = name.split(" ");
var processedName = nameParts[0].charAt(0).toUpperCase() + ".";
for (var i = 1; i < nameParts.length - 1; i++) {
  processedName += " " + nameParts[i].charAt(0).toUpperCase() + ".";
}
processedName += " " + nameParts[nameParts.length - 1];

// Display the processed name using document.write
document.write("<p style='font-size: 14px; color: red; background-color: cyan;'>" + processedName + "</p>");