import Text from "@/components/Text";

const Word = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center gap-4 text-center">
    <Text>{text}</Text>
  </div>
);

export default Word;
