import type { Request, Response } from "express";

import { Router } from "express";
import coloursData from "data/colours";

const colours = Router();

colours.get("/", (req: Request, res: Response) => {
  res.json(coloursData);
});

export default colours;
