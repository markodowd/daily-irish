import Word from "@/components/modules/Word";
import Text from "@/components/modules/Text";

async function getData(month: string, day: string) {
  const res = await fetch(`http://localhost:3001/${month}/${day}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface PageProps {
  params: { month: string; day: string };
}

export default async function Words({ params }: PageProps) {
  const { irish, english } = await getData(params.month, params.day);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="w-[1200px] h-max bg-gradient-to-r from-emerald-950 to-cyan-950 flex flex-col"
        id="image-node"
      >
        <div className="p-8 rounded-3xl m-14 flex-1 flex flex-col gap-8 justify-evenly items-center bg-gradient-to-br from-green-950 to-cyan-950 shadow-2xl">
          <Word text={irish} />
          <Text className="text-7xl">☘</Text>
          <Word text={english} />
        </div>
        <div className="h-max flex justify-end">
          <p className="m-4 text-lg text-white">@DailyIrishBot</p>
        </div>
      </div>
    </main>
  );
}
