import { useState, useEffect } from "react";

export const useImagesUrls = (date, imagesName) => {
  const [imagesURLS, setImagesURLS] = useState([]);
  const BASE_URL = "https://epic.gsfc.nasa.gov/archive/natural";

  useEffect(() => {
    const createURLS = () => {
      const urls = imagesName.map(
        (image) => `${BASE_URL}/${date}/png/${image}.png`
      );

      setImagesURLS(urls);
    };

    createURLS();
  }, [imagesName, date]);
  return imagesURLS;
};
