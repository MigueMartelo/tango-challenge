export const fetchData = async (year, month, day) => {
  const BASE_URL = "https://epic.gsfc.nasa.gov/api/natural/date";

  const response = await fetch(`${BASE_URL}/${year}/${month}/${day}`);
  if (!response.ok) {
    throw new Error(`Http status ${response.status}`);
  }
  const data = await response.json();
  const imagesIds = data.map((item) => item.image);

  return imagesIds;
};
