import rwClient from "twitterClient";

const tweet = async (irish: string, english: string) => {
  try {
    await rwClient.v2.tweet({
      text: `Gaeilge: ${irish}\n\nEnglish: ${english}\n\n#Gaeilge #100DaysofGaeilge #365DaysofGaeilge #Irish #IrishLanguage`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default tweet;
