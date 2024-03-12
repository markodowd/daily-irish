import { isMatch } from "date-fns";

const isValidDayOfWeek = (dayOfWeek: string): boolean =>
  isMatch(dayOfWeek, "EEE");

export default isValidDayOfWeek;
