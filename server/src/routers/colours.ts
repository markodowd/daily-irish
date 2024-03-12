import type { Request, Response } from "express";

import { Router } from "express";
import coloursData from "data/colours";

const colours = Router();

colours.get("/", (req: Request, res: Response) => {
  res.json(coloursData);
});

colours.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (id >= 0) {
    const colour = coloursData[id];

    res.json(colour);
  } else {
    res.status(400).send("Invalid id. Please use a number greater than 1.");
  }
});

export default colours;
