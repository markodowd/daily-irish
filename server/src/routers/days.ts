import type { Request, Response } from "express";

import { Router } from "express";
import daysData from "data/days";

const days = Router();

days.get("/", (req: Request, res: Response) => {
  res.json(daysData);
});

export default days;
