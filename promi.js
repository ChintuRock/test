function bookFlight() {
    return new Promise((resolve, reject) => {
      // Simulating booking a flight (Async operation)
      setTimeout(() => {
        const flightNumber = prompt("Enter your flight number:");
        if (flightNumber) {
          resolve(flightNumber);
        } else {
          reject("Failed to book a flight.");
        }
      }, 2000); // Delay of 2 seconds
    });
  }
  function bookHotel(flightNumber) {
    return new Promise((resolve, reject) => {
      // Simulating booking a hotel (Async operation)
      setTimeout(() => {
        const hotelName = prompt("Enter the hotel name:");
        if (hotelName) {
          resolve(`Hotel "${hotelName}" booked successfully for flight number ${flightNumber}.`);
        } else {
          reject("Failed to book a hotel.");
        }
      }, 2000); // Delay of 2 seconds
    });
  }
  bookFlight()
    .then((flightNumber) => {
      return bookHotel(flightNumber);
    })
    .then((hotelBookingStatus) => {
      console.log(hotelBookingStatus);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    