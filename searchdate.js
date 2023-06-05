// Function to search and display the date within a string
function searchAndDisplayDate(inputString) {
    // Regular expression pattern to match the date in the format "dd/mm/yyyy"
    var datePattern = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  
    // Extract the date from the input string using the regex pattern
    var dateMatch = inputString.match(datePattern);
  
    // Display the date using alert
    if (dateMatch && dateMatch.length > 0) {
      alert("Date found: " + dateMatch[0]);
    } else {
      alert("No date found in the string.");
    }
  }
  
  // Example usage
  var inputString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Date: 12/05/2023";
  searchAndDisplayDate(inputString);