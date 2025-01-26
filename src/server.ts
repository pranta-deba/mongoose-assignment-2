import mongoose from "mongoose"; // Import Mongoose for MongoDB interactions
import config from "./app/config"; // Import application configuration
import app from "./app"; // Import Express application

async function main() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(config.database_url as string);

    // Start Express server
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    // Catch any errors that occur during MongoDB connection or server start
    console.error("Error starting server:", err);
  }
}

// Call the main function to start the application
main();
