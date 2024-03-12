import rwClient from "twitterClient";

const tweet = async (irish: string, english: string, imageFile: string) => {
  try {
    const mediaIds = await Promise.all([
      rwClient.v1.uploadMedia(
        `../server/src/data/images/wordOfTheDay/${imageFile}.png`
      ),
    ]);

    await rwClient.v2.tweet({
      text: `Gaeilge: ${irish}\n\nEnglish: ${english}\n\n#Gaeilge #100DaysofGaeilge #365DaysofGaeilge #Irish #IrishLanguage`,
      media: { media_ids: mediaIds },
    });
  } catch (error) {
    console.log(error);
  }
};

export default tweet;
