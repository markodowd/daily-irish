import axios from "axios";
import type { AxiosResponse } from "axios";
import "dotenv/config";
import type ApiResponse from "types/ApiResponse";
import { getDayOfYear } from "date-fns";
import tweet from "tweet";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchData = () => {
  const today = new Date();
  const dayOfYear = getDayOfYear(today);

  console.log(`Fetching data for day ${dayOfYear}`);

  axios
    .get<ApiResponse>(`${apiUrl}/words/${dayOfYear}`)
    .then((response: AxiosResponse<ApiResponse>) => {
      const { irish, english }: ApiResponse = response.data;

      console.log(`Today - ${today}: ${irish} - ${english}`);
      tweet(irish, english);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchData;
