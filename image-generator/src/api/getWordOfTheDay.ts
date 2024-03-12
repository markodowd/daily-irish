const getWordOfTheDay = async (month: string, day: string) => {
  const res = await fetch(`http://localhost:3001/${month}/${day}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getWordOfTheDay;
