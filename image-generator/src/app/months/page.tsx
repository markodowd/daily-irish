import getMonths from "@/api/getMonths";
import DailyImage from "@/components/DailyImage";
import Translation from "@/types/Translation";

const MonthsPage = async () => {
  const months: Translation[] = await getMonths();

  return (
    <>
      {months.map((month, index) => (
        <DailyImage key={index} data={month} />
      ))}
    </>
  );
};

export default MonthsPage;
