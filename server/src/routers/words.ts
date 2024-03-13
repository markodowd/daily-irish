import type { Request, Response } from "express";

import { Router } from "express";
import wordsData from "data/words";

const words = Router();

words.get("/", (req: Request, res: Response) => {
  res.json(wordsData);
});

export default words;
