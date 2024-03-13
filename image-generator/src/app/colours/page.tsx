import getColours from "@/api/getColours";
import DailyImage from "@/components/DailyImage";
import Translation from "@/types/Translation";

const ColoursPage = async () => {
  const colours: Translation[] = await getColours();

  return (
    <>
      {colours.map((colour, index) => (
        <DailyImage key={index} data={colour} />
      ))}
    </>
  );
};

export default ColoursPage;
