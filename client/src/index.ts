import { CronJob } from "cron";
import fetchData from "fetchData";

const job = CronJob.from({
  cronTime: "* * * * * *",
  onTick: fetchData,
  timeZone: "Europe/Dublin",
});

job.start();
