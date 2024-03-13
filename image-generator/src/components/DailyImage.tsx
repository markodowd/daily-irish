import Word from "@/components/Word";
import Text from "@/components/Text";
import type Translation from "@/types/Translation";

type DailyImageProps = {
  data: Translation;
};

const DailyImage = ({
  data: { irish, english, imageFile },
}: DailyImageProps) => {
  if (imageFile !== "") {
    return <div>Already Saved</div>;
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      id="test"
    >
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
};

export default DailyImage;
