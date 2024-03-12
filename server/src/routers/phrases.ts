import type { Request, Response } from "express";

import { Router } from "express";
import phrasesData from "data/phrases";

const phrases = Router();

phrases.get("/", (req: Request, res: Response) => {
  res.json(phrasesData);
});

phrases.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (id >= 0) {
    const phrase = phrasesData[id];

    res.json(phrase);
  } else {
    res.status(400).send("Invalid id");
  }
});

export default phrases;
