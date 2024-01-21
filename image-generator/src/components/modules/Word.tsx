import Text from "@/components/modules/Text";

const Word = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center gap-4">
    <Text>{text}</Text>
  </div>
);

export default Word;
