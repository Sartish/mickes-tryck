import React, { useEffect } from 'react';
import IPage from '../interfaces/pages';
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
import AboutMicke from '../components/AboutMicke';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomePage: React.FC<IPage> = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Banner />
      <Header />
      <WrappingFirstSection>
        <StepsContainer>
          <Intructions />
        </StepsContainer>
      </WrappingFirstSection>
      <Quote />
      <HeaderSustainability />
      <WrappingSecondSection>
        <MollanContainer>
          <Mollan data-aos="fade-left" />
        </MollanContainer>
        <TshirtpictureContainer>
          <TshirtPicture data-aos="fade-left" />
        </TshirtpictureContainer>
      </WrappingSecondSection>
      <AboutMicke />
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
  margin-bottom: 20px;

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
