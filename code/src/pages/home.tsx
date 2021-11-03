import React from 'react';
import IPage from '../interfaces/pages';
// import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
// import Slider from '../components/Slider';
import styled from 'styled-components';
import Header from '../components/Header';
import Quote from '../components/Quote';
import Mollan from '../components/Mollan';
import TshirtPicture from '../components/TshirtPicture';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Intructions from '../components/Instructions';
import HeaderSustainability from '../components/HeaderSustainability';

const HomePage: React.FC<IPage> = () => {
  return (
    <>
      <Banner />
      <Header />
      <WrappingFirstSection>
        <StepsContainer>
          <Intructions />
        </StepsContainer>
        {/* <LottieContainer>
          <LottieAnimation />
        </LottieContainer> */}
      </WrappingFirstSection>
      <Quote />
      <HeaderSustainability />
      <WrappingSecondSection>
        <MollanContainer>
          <Mollan />
        </MollanContainer>
        <TshirtpictureContainer>
          <TshirtPicture />
        </TshirtpictureContainer>
      </WrappingSecondSection>
      <Footer />
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
    margin-bottom: 50px;
    padding: 20px;
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
    margin: 0px;
  }
`;

export const MollanContainer = styled.div`
  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;
