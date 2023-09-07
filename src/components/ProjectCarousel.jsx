import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SlowText from "./SlowText";

const IMAGES = [
  "/assets/images/ex-images/homepage.png",
  "/assets/images/ex-images/gh-home.png",
  "/assets/images/ex-images/memory-card.png",
];

const ProjectCarousel = () => {
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [previousModelIndex, setPreviousModelIndex] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  return (
    <div className="max-md:max-w-[400px] md:order-2 md:w-[50%]">
      <Carousel
        onChange={(index) => {
          setSelectedModelIndex(index);
        }}
        selectedItem={selectedModelIndex}
        autoPlay={true}
        interval={8000}
        infiniteLoop={true}
        swipeable={true}
      >
        {IMAGES.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img src={image} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
