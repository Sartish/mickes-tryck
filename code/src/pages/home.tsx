import React from 'react';
import IPage from '../interfaces/pages';
// import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';

const HomePage: React.FC<IPage> = () => {
  return (
    <>
      <Navigation />
      <h1>this is a home page </h1>
      <Slider></Slider>
    </>
  );
};

export default HomePage;
