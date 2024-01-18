import rwClient from "twitterClient";

const tweet = async (irish: string, english: string) => {
  try {
    await rwClient.v2.tweet({
      text: `Gaeilge: ${irish}\nEnglish: ${english}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default tweet;
