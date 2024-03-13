import type { Request, Response } from "express";

import { Router } from "express";
import phrasesData from "data/phrases";

const phrases = Router();

phrases.get("/", (req: Request, res: Response) => {
  res.json(phrasesData);
});

export default phrases;
