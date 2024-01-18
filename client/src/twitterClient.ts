import { TwitterApi } from "twitter-api-v2";
import "dotenv/config";

// TODO/NOTE: any cast because TwitterAPI overload
const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
} as any);

const rwClient = client.readWrite;

export default rwClient;
