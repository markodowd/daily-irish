import "dotenv/config"; // Load environment variables from .env file
import type { Application } from "express";

const port = process.env.PORT;

const startServer = (app: Application) => {
  // Start the server
  if (!port) {
    throw new Error("No port specified");
  }

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

export default startServer;
