import React from 'react';
import IPage from '../interfaces/pages';
// import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import Steps from '../components/Steps';
import LottieAnimation from '../components/LottieAnimation';
import styled from 'styled-components';
import Header from '../components/Header';
import Quote from '../components/Quote';
import Mollan from '../components/Mollan';
import TshirtPicture from '../components/TshirtPicture';

const HomePage: React.FC<IPage> = () => {
  return (
    <>
      <Navigation />
      <Slider></Slider>
      <Header />
      <WrappingFirstSection>
        <StepsContainer>
          <Steps />
        </StepsContainer>
        <LottieContainer>
          <LottieAnimation />
        </LottieContainer>
      </WrappingFirstSection>
      <Quote />
      <WrappingSecondSection>
        <MollanContainer>
          <Mollan />
        </MollanContainer>
        <TshirtpictureContainer>
          <TshirtPicture />
        </TshirtpictureContainer>
      </WrappingSecondSection>
    </>
  );
};

export default HomePage;

export const WrappingFirstSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const WrappingSecondSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const StepsContainer = styled.div`
  @media (min-width: 768px) {
    margin: 50px;
  }
`;

export const LottieContainer = styled.div`
  @media (min-width: 768px) {
    margin: 50px;
  }
`;

export const TshirtpictureContainer = styled.div`
  @media (min-width: 768px) {
    margin: 50px;
  }
`;

export const MollanContainer = styled.div`
  @media (min-width: 768px) {
    margin: 50px;
  }
`;
