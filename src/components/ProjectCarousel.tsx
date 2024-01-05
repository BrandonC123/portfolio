import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SlowText from "./SlowText";

interface IImage {
  image: string;
  text: string;
}

const IMAGES: IImage[] = [
  {
    image: "/assets/images/ex-images/imageapp-home.webp",
    text: "Image App - Homepage",
  },
  {
    image: "/assets/images/ex-images/imageapp-sub.webp",
    text: "Image App - Subscription page",
  },
  {
    image: "/assets/images/ex-images/gh-home.png",
    text: "Github Clone - Homepage (signed in)",
  },
  {
    image: "/assets/images/ex-images/gh-home-not-sign.png",
    text: "Github Clone - Homepage (not signed in)",
  },
  {
    image: "/assets/images/ex-images/form-creator.png",
    text: "Form Creator App - A completed form",
  },
  {
    image: "/assets/images/ex-images/memory-card.png",
    text: "Memory Card Game",
  },
];

const ProjectCarousel = () => {
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  return (
    <div>
      <Carousel
        onChange={(index) => {
          setSelectedModelIndex(index);
        }}
        selectedItem={selectedModelIndex}
        autoPlay={true}
        interval={15000}
        infiniteLoop={true}
        swipeable={true}
      >
        {IMAGES.map((data, index) => {
          const { image } = data;
          return (
            <div key={index}>
              <img src={image} alt="" className="rounded-md" />
            </div>
          );
        })}
      </Carousel>
      {IMAGES.map((data, index) => {
        const { text } = data;
        return (
          index === selectedModelIndex && (
            <p>
              <span className="font-medium">Project:</span>{" "}
              <SlowText text={text} speed={50} />
            </p>
          )
        );
      })}
    </div>
  );
};

export default ProjectCarousel;
