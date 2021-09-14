import React from 'react';
import Carousel from 'react-elastic-carousel';
import Items from './Items';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Slider: React.FC<any> = () => {
  return (
    <Carousel isRTL={true} breakPoints={breakPoints}>
      <Items>Item six</Items>
      <Items>Item five</Items>
      <Items>Item four</Items>
      <Items>Item three</Items>
      <Items>Item two</Items>
      <Items>Item one</Items>
    </Carousel>
  );
};

export default Slider;
