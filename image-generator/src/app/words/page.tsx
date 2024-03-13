import getWords from "@/api/getWords";
import DailyImage from "@/components/DailyImage";
import Translation from "@/types/Translation";

const WordsPage = async () => {
  const words: Translation[] = await getWords();

  return (
    <>
      {words.map((word, index) => (
        <DailyImage key={index} data={word} />
      ))}
    </>
  );
};

export default WordsPage;
