import axios from "axios";
import "dotenv/config";
import tweetColour from "tweets/tweetColour";
import type ApiResponse from "types/ApiResponse";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("No API URL specified");
}

const fetchColour = () => {
  axios
    .get<ApiResponse[]>(`${apiUrl}/colours`)
    .then((response) => {
      const data = response.data;

      // pick a random entry from the array
      const randomIndex = Math.floor(Math.random() * data.length);

      const { irish, english, imageFile } = data[randomIndex];

      console.log("tweeting colour: ", irish, english, imageFile);

      tweetColour(irish, english, imageFile);
    })
    .catch((error: Error) => {
      console.error("Error fetching data:", error.message);
    });
};

export default fetchColour;
