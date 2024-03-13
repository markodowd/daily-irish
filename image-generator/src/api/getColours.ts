const getColours = async () => {
  const res = await fetch(`http://localhost:3001/colours`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getColours;
