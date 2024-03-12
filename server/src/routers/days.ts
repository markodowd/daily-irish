import type { Request, Response } from "express";

import { Router } from "express";
import daysData from "data/days";

const days = Router();

days.get("/", (req: Request, res: Response) => {
  res.json(daysData);
});

days.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (id >= 0) {
    const day = daysData[id];

    res.json(day);
  } else {
    res.status(400).send("Invalid id");
  }
});

export default days;
