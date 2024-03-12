import axios from "axios";
import type { AxiosResponse } from "axios";
import "dotenv/config";
import type ApiResponse from "types/ApiResponse";
import { format } from "date-fns";
import tweetDayOfTheWeek from "tweets/tweetDayOfTheWeek";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchDayOfTheWeek = () => {
  const currentDate = new Date();

  const currentDayOfTheWeek = format(currentDate, "EEE").toLowerCase(); // e.g. mon, tue, wed

  console.log(`Fetching data for ${currentDayOfTheWeek}`);

  axios
    .get<ApiResponse>(`${apiUrl}/days/${currentDayOfTheWeek}`)
    .then((response: AxiosResponse<ApiResponse>) => {
      const { irish, english, imageFile }: ApiResponse = response.data;

      console.log(`Today - ${currentDayOfTheWeek}: ${irish} - ${english}`);

      tweetDayOfTheWeek(irish, english, imageFile);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchDayOfTheWeek;
