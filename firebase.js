const firebase = require("./firebase");

// Reference to the database
const db = firebase.database();

// Write data
db.ref("test").set({
  message: "Hello from FLEETFLOW!"
}, (error) => {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully!");

    // Read data
    db.ref("test").once("value", (snapshot) => {
      console.log("Read from database:", snapshot.val());
    });
  }
});

