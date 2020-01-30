import React, { useState } from "react";
import { 
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: process.env.REACT_APP_IMAGES1,
    altText: 'Slide 1',
    caption: ''
  },
  {
    src: process.env.REACT_APP_IMAGES2,
    altText: 'Slide 2',
    caption: ''
  },
  {
    src: process.env.REACT_APP_IMAGES3,
    altText: 'Slide 3',
    caption: ''
  }
];

const Home = (props) => {
  console.log(process.env.REACT_APP_IMAGES1);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width: "100%"}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px", marginTop: "50px" }}>Lockheed Second Team Project</h1>
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <h2 style={{textAlign: "center", marginTop: "30px"}}>
      <a href="#">Login</a> to check out more!
    </h2>
    </div>
  );
}

export default Home;