// Function to handle the click event
function handleClick() {
    console.log('Button clicked!');
  }
  
  // Function to handle the mouseover event
  function handleMouseOver() {
    console.log('Mouse over the element!');
  }
  
  // Function to handle the mouseout event
  function handleMouseOut() {
    console.log('Mouse out of the element!');
  }
  
  // Function to handle the change event
  function handleChange(event) {
    console.log(`Input value changed: ${event.target.value}`);
  }
  
  // Function to handle the keydown event
  function handleKeyDown(event) {
    console.log(`Key pressed: ${event.key}`);
  }
  
  // Get the button element
  const button = document.getElementById('myButton');
  
  // Add event listeners to the button
  button.addEventListener('click', handleClick);
  button.addEventListener('mouseover', handleMouseOver);
  button.addEventListener('mouseout', handleMouseOut);
  
  // Get the input element
  const input = document.getElementById('myInput');
  
  // Add event listener to the input
  input.addEventListener('change', handleChange);
  input.addEventListener('keydown', handleKeyDown);
  