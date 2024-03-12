import axios from "axios";
import type { AxiosResponse } from "axios";
import "dotenv/config";
import type ApiResponse from "types/ApiResponse";
import { format } from "date-fns";
import tweet from "tweet";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchWordOfTheDay = () => {
  const currentDate = new Date();

  const currentMonth = format(currentDate, "MMM"); // e.g. Jan, Feb, Mar
  const currentDayOfMonth = format(currentDate, "d"); // e.g. 1, 2, 3

  console.log(`Fetching data for ${currentMonth} ${currentDayOfMonth}`);

  axios
    .get<ApiResponse>(`${apiUrl}/${currentMonth}/${currentDayOfMonth}`)
    .then((response: AxiosResponse<ApiResponse>) => {
      const { irish, english, imageFile }: ApiResponse = response.data;

      console.log(
        `Today - ${currentMonth} ${currentDayOfMonth}: ${irish} - ${english}`
      );

      tweet(irish, english, imageFile);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchWordOfTheDay;
