import rwClient from "twitterClient";
import generateTweetText from "utils/generateTweetText";

const tweetMonth = async (
  irish: string,
  english: string,
  imageFile: string
) => {
  try {
    const mediaIds = await Promise.all([
      rwClient.v1.uploadMedia(
        `../server/src/data/images/months/${imageFile}.png`
      ),
    ]);

    await rwClient.v2.tweet({
      text: generateTweetText("Month of the Year", irish, english),
      media: { media_ids: mediaIds },
    });
  } catch (error) {
    console.log(error);
  }
};

export default tweetMonth;
