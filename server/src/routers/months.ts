import type { Request, Response } from "express";

import { Router } from "express";
import monthsData from "data/months";

const months = Router();

months.get("/", (req: Request, res: Response) => {
  res.json(monthsData);
});

export default months;
