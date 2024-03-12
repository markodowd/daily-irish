import Word from "@/components/modules/Word";
import Text from "@/components/modules/Text";

type DailyImageProps = {
  irish: string;
  english: string;
};

const DailyImage = ({ irish, english }: DailyImageProps) => (
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

export default DailyImage;
