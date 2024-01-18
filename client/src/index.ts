import { CronJob } from "cron";
import fetchData from "fetchData";

const job = CronJob.from({
  cronTime: "0 0 0 * * *",
  onTick: fetchData,
  timeZone: "Europe/Dublin",
});

job.start();
