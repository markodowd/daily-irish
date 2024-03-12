import getWordOfTheDay from "@/api/getWordOfTheDay";
import DailyImage from "@/components/DailyImage";

interface PageProps {
  params: { month: string; day: string };
}

const Words = async ({ params: { month, day } }: PageProps) => {
  const { irish, english } = await getWordOfTheDay(month, day);

  return <DailyImage irish={irish} english={english} />;
};

export default Words;
