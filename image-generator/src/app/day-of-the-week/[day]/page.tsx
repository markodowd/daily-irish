import getDayOfTheWeek from "@/api/getDayOfTheWeek";
import DailyImage from "@/components/DailyImage";

interface PageProps {
  params: { day: string };
}

const DayOfTheWeek = async ({ params: { day } }: PageProps) => {
  const { irish, english } = await getDayOfTheWeek(day);

  return <DailyImage irish={irish} english={english} />;
};

export default DayOfTheWeek;
