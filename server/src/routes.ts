import type { Application } from "express";
import colours from "routers/colours";
import words from "routers/words";
import days from "routers/days";
import phrases from "routers/phrases";

const routes = (app: Application) => {
  app.use("/words", words);
  app.use("/colours", colours);
  app.use("/days", days);
  app.use("/phrases", phrases);
};

export default routes;
