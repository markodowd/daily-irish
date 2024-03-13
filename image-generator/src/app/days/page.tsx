import getDays from "@/api/getDays";
import DailyImage from "@/components/DailyImage";
import Translation from "@/types/Translation";

const DaysPage = async () => {
  const days: Translation[] = await getDays();

  return (
    <>
      {days.map((day, index) => (
        <DailyImage key={index} data={day} />
      ))}
    </>
  );
};

export default DaysPage;
