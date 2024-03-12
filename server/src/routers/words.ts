import type { Request, Response } from "express";

import { Router } from "express";
import wordsData from "data/words";

const words = Router();

words.get("/", (req: Request, res: Response) => {
  res.json(wordsData);
});

words.get("/length", (req: Request, res: Response) => {
  res.json(wordsData.length);
});

words.get("/:dayOfYear", (req: Request, res: Response) => {
  const dayOfYear = parseInt(req.params.dayOfYear);

  if (dayOfYear > 0) {
    const word = wordsData[dayOfYear];

    res.json(word);
  } else {
    res
      .status(400)
      .send("Invalid day of the year. Please use a number greater than 1.");
  }
});

export default words;
