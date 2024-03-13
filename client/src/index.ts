import { CronJob } from "cron";
import fetchDay from "api/fetchDay";
import fetchWord from "api/fetchWord";
import fetchMonth from "api/fetchMonth";
import fetchColour from "api/fetchColour";

const wordJob = CronJob.from({
  cronTime: "0 0 0 * * *", // Runs at 0:00 AM every day
  onTick: fetchWord,
  timeZone: "Europe/Dublin",
});

const monthJob = CronJob.from({
  cronTime: "0 0 6 * * *", // Runs at 6:00 AM every day
  onTick: fetchMonth,
  timeZone: "Europe/Dublin",
});

const dayJob = CronJob.from({
  cronTime: "0 0 12 * * *", // Runs at 12:00 PM every day
  onTick: fetchDay,
  timeZone: "Europe/Dublin",
});

const colourJob = CronJob.from({
  cronTime: "0 0 18 * * *", // Runs at 6:00 PM every day
  onTick: fetchColour,
  timeZone: "Europe/Dublin",
});

wordJob.start();
monthJob.start();
dayJob.start();
colourJob.start();
