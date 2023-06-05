// Prompt the user to enter the number of rows
var numRows = prompt("Enter the number of rows:");

// Prompt the user to enter the number of columns
var numCols = prompt("Enter the number of columns:");

// Convert the input strings to numbers
numRows = parseInt(numRows);
numCols = parseInt(numCols);

// Create the multiplication table
var table = "";

// Iterate through each row
for (var i = 1; i <= numRows; i++) {
  // Iterate through each column
  for (var j = 1; j <= numCols; j++) {
    // Calculate the product
    var product = i * j;
    
    // Add the product to the table string
    table += product + "\t";
  }
  
  // Add a new line after each row
  table += "\n";
}

// Display the multiplication table using document.write
document.write(table);