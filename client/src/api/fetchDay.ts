import axios from "axios";
import "dotenv/config";
import type ApiResponse from "types/ApiResponse";
import { getDay } from "date-fns";
import tweetDay from "tweets/tweetDay";
import convertDay from "utils/convertDay";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchDay = () => {
  const date = new Date();
  const dayNumber = getDay(date);

  console.log("dayNumber: ", dayNumber);

  axios
    .get<ApiResponse[]>(`${apiUrl}/days`)
    .then((response) => {
      const data = response.data;

      const realDayNumber = convertDay(dayNumber);

      console.log("realDayNumber: ", realDayNumber);

      const { irish, english, imageFile } = data[realDayNumber];

      console.log("tweeting day of the week: ", irish, english, imageFile);

      tweetDay(irish, english, imageFile);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchDay;
