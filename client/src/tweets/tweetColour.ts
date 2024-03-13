import rwClient from "twitterClient";
import generateTweetText from "utils/generateTweetText";

const tweetColour = async (
  irish: string,
  english: string,
  imageFile: string
) => {
  try {
    const mediaIds = await Promise.all([
      rwClient.v1.uploadMedia(
        `../server/src/data/images/colours/${imageFile}.png`
      ),
    ]);

    await rwClient.v2.tweet({
      text: generateTweetText("Colour of the Day", irish, english),
      media: { media_ids: mediaIds },
    });
  } catch (error) {
    console.log(error);
  }
};

export default tweetColour;
