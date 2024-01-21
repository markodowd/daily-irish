import type { Application, Request, Response } from "express";
import data from "data/data";
import { sortedWords } from "data/words";

const routes = (app: Application) => {
  // Route to return the full JSON object
  app.get("/", (req: Request, res: Response) => {
    res.json(data);
  });

  // Route with a query parameter to return specific data from month
  app.get("/:month/:day", (req: Request, res: Response) => {
    const month = req.params.month.toLocaleLowerCase();
    const day = req.params.day;

    const word = sortedWords[month][day];

    res.json(word);
  });
};

export default routes;
