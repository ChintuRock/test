function calculate() {
  // Get the operand values from the text boxes
  var operand1 = parseInt(document.getElementById("operand1").value);
  var operand2 = parseInt(document.getElementById("operand2").value);
  
  // Get the operator value from the text box
  var operator = document.getElementById("operator").value;
  
  // Variable to store the result
  var result;
  
  // Perform the calculation based on the operator
  if (operator === "+") {
    result = operand1 + operand2;
  } else if (operator === "-") {
    result = operand1 - operand2;
  } else if (operator === "*") {
    result = operand1 * operand2;
  } else if (operator === "/") {
    result = operand1 / operand2;
  } else {
    // Display an error if the operator is invalid
    alert("Invalid operator");
    return;
  }
  
  // Display the result using an alert
  alert("Result: " + result);
}