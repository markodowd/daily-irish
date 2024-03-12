import { CronJob } from "cron";
import fetchDayOfTheWeek from "api/fetchDayOfTheWeek";
import fetchWordOfTheDay from "api/fetchWordOfTheDay";

const dayOfTheWeekJob = CronJob.from({
  cronTime: "0 0 6 * * *", // Runs at 6:00 AM every day
  onTick: fetchDayOfTheWeek,
  timeZone: "Europe/Dublin",
});

const wordOfTheDayJob = CronJob.from({
  cronTime: "0 0 0 * * *", // Runs at 0:00 AM every day
  onTick: fetchWordOfTheDay,
  timeZone: "Europe/Dublin",
});

wordOfTheDayJob.start();
dayOfTheWeekJob.start();
