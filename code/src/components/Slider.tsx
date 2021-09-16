import React from 'react';
import Carousel from 'react-elastic-carousel';
import Items from './Items';
import apelisner from '../assets/apelsiner.png';
import sliderOne from '../assets/sliderOne.jpg';
import '../App.css';

// breakpoints, identifying when next item will be shown
const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

const Slider: React.FC<any> = () => {
  return (
    <Carousel
      isRTL={true}
      breakPoints={breakPoints}
      enableSwipe={true}
      enableAutoPlay
      autoPlaySpeed={3000}
      className="slider"
      itemPadding={[0]}
    >
      <Items>
        <img src={apelisner} alt="hej" />
      </Items>
      <Items>
        <img src={sliderOne} alt="hej" />{' '}
      </Items>
      <Items>"Det miljövänliga alternativet"</Items>
    </Carousel>
  );
};

export default Slider;
