import axios from "axios";
import "dotenv/config";
import type ApiResponse from "types/ApiResponse";
import { getDayOfYear } from "date-fns";
import tweetWord from "tweets/tweetWord";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchWord = () => {
  const currentDate = new Date();
  const dayOfYearNumber = getDayOfYear(currentDate);

  console.log("dayOfYearNumber: ", dayOfYearNumber);

  axios
    .get<ApiResponse[]>(`${apiUrl}/words`)
    .then((response) => {
      const data = response.data;

      const { irish, english, imageFile } = data[dayOfYearNumber];

      console.log("tweeting word of the day: ", irish, english, imageFile);

      tweetWord(irish, english, imageFile);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchWord;
