const convertDay = (dayNumber: number) => {
  // Converts date-fns day number (0 = Sunday, 1 = Monday, etc.) to the API day number (0 = Monday, 1 = Tuesday, etc.)
  switch (dayNumber) {
    case 0:
      return 6;
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
      return 5;
    default:
      throw new Error("Invalid day number");
  }
};

export default convertDay;
