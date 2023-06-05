// Function to handle success and get the coordinates
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
  }
  
  // Function to handle errors
  function error() {
    console.log('Unable to retrieve coordinates.');
  }
  
  // Check if geolocation is supported
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log('Geolocation is not supported.');
  }
  