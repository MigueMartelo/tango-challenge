import { Carousel as Slider, Typography } from "antd";
import { useImagesUrls } from "../../hooks/useImagesURLS";

const { Title } = Typography;

const Carousel = ({ date, imagesName }) => {
  const imagesURLS = useImagesUrls(date, imagesName);

  return (
    imagesURLS && (
      <>
        <Title level={4}>Photo Date: {date}</Title>
        <Slider autoplay effect="fade">
          {imagesURLS.map((url) => (
            <img src={url} alt={url} key={url} />
          ))}
        </Slider>
      </>
    )
  );
};

export default Carousel;
