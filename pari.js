function tripToLocation(location) {
    return new Promise((resolve, reject) => {
      if (location === "Paris") {
        resolve("Let's take a trip to Paris");
      } else {
        reject("Invalid Location");
      }
    });
  }
  
  const userInput = prompt("Enter a location:");
  tripToLocation(userInput)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
    