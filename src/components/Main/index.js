import { useState } from "react";
import { Button, DatePicker, Typography } from "antd";

import { fetchData } from "../../utils/fetchData";

import Carousel from "../Carousel";

const { Title } = Typography;

const Main = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [imagesName, setImagesName] = useState(null);

  const onChange = (date) => {
    if (date) {
      setYear(new Date().getFullYear());
      setMonth(date.format("MM"));
      setDay(date.format("DD"));
    }
    setImagesName(null);
  };

  const handleClick = async () => {
    if (!year || !month || !day) {
      alert("The date is mandatory");
      return;
    }

    const imagesIds = await fetchData(year, month, day, setYear);
    setImagesName(imagesIds);
  };

  return (
    <div>
      <Title level={3}>Select your Birth Date</Title>
      <DatePicker onChange={onChange} />
      <Button onClick={handleClick} type="primary">
        Get the photos
      </Button>
      {imagesName && (
        <Carousel date={`${year}/${month}/${day}`} imagesName={imagesName} />
      )}
    </div>
  );
};

export default Main;
