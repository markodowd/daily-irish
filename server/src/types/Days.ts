import type Day from "types/Day";

type Days = {
  [key in Day]: {
    irish: string;
    english: string;
    imageFile: string;
  };
};

export default Days;
