import axios from "axios";
import "dotenv/config";
import type ApiResponse from "types/ApiResponse";
import { getMonth } from "date-fns";
import tweetMonth from "tweets/tweetMonth";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchMonth = () => {
  const date = new Date();
  const monthNumber = getMonth(date);

  console.log("monthNumber: ", monthNumber);

  axios
    .get<ApiResponse[]>(`${apiUrl}/months`)
    .then((response) => {
      const data = response.data;

      const { irish, english, imageFile } = data[monthNumber];

      console.log("tweeting month: ", irish, english, imageFile);

      tweetMonth(irish, english, imageFile);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchMonth;
