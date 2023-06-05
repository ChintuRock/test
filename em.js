function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

const userInput = prompt("Enter an email address:");
if (validateEmail(userInput)) {
  console.log("Email is valid.");
} else {
  console.log("Email is invalid.");
}