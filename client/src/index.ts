import { CronJob } from "cron";
import fetchDayOfTheWeek from "fetchDayOfTheWeek";
import fetchWordOfTheDay from "fetchWordOfTheDay";

// const job = CronJob.from({
//   cronTime: "0 0 0 * * *",
//   onTick: fetchWordOfTheDay,
//   timeZone: "Europe/Dublin",
// });

// job.start();
fetchDayOfTheWeek();
