import type { Application, Request, Response } from "express";
import data from "data/data";
import { sortedWords } from "data/words";
import days from "data/days";
import isValidDayOfWeek from "utils/isValidDayOfWeek";
import type Day from "types/Day";

const routes = (app: Application) => {
  // Route to return the full JSON object
  app.get("/", (req: Request, res: Response) => {
    res.json(data);
  });

  app.get("/days/:day", (req: Request, res: Response) => {
    console.log("here");
    const day = req.params.day.toLowerCase() as Day;

    console.log("day: ", day);

    if (isValidDayOfWeek(day)) {
      const word = days[day];
      res.json(word);
    } else {
      res
        .status(400)
        .send(
          "Invalid day of the week or format. Please use the first three letters of the day of the week."
        );
    }
  });

  // Route with a query parameter to return specific data from month
  app.get("/:month/:day", (req: Request, res: Response) => {
    const month = req.params.month.toLowerCase();
    const day = req.params.day;

    const word = sortedWords[month][day];

    res.json(word);
  });
};

export default routes;
