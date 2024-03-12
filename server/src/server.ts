import "dotenv/config"; // Load environment variables from .env file
import type { Application } from "express";

const port = process.env.PORT;

const server = (app: Application) => {
  if (!port) {
    throw new Error("No port specified");
  }

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

export default server;
