import express from "express";
import type { Application, Request, Response } from "express";

import "dotenv/config"; // Load environment variables from .env file
import words from "data/words";

const app: Application = express();
const port = process.env.PORT;

// Route to return the full JSON object
app.get("/words", (req: Request, res: Response) => {
  res.json(words);
});

// Route with a query parameter to return specific words at index
app.get("/words/:index", (req: Request, res: Response) => {
  const index = Number(req.params.index);
  res.json(words[index]);
});

if (!port) {
  throw new Error("No port specified");
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
