import React, { useEffect } from 'react';
import styled from 'styled-components';
import tshirt from '../assets/mickes.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navigation from './Navigation';

const Banner: React.FC<any> = () => {
  return (
    <>
      <BannerContent>
        <Navigation />
        <Container>
          <BannerHeader data-aos="fade-up">Det lokala miljövänliga tryckeriet.</BannerHeader>
        </Container>
      </BannerContent>
    </>
  );
};

export default Banner;

const blue = '#262A53';
const ParagraphFont = "'Roboto', sans-serif;";

export const BannerContent = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${tshirt});
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
  }
`;

export const BannerHeader = styled.div`
  background-image: linear-gradient(rgba(255, 127, 80, 0.6), rgba(255, 127, 80, 0.6));
  color: white;
  font-family: 'Scheherazade New', serif;
  font-size: 60px;
  padding: 20px;
  line-height: 1em;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 70px;
  }
`;
export const BannerButton = styled.button`
  display: inline-block;
  color: white;
  background-color: #ff7f50;
  width: 180px;
  border: none;
  text-align: center;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  font-family: ${ParagraphFont};
  font-size: 25px;
  border-radius: 10px;
  text-decoration: none;
  position: absolute; 
  top: 70%;
  left: 30%;
  @media (min-width: 768px) {
    top: 70%;
    left: calc(50% - 90px);
  }

transition: background-color 1s ease-in, color 1s ease-in;
:hover {
  color: white;
  background-color: ${blue};
  border:1px solid ${blue};
  transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;

export const BannerLogo = styled.h1`
  font-family: 'Permanent Marker', cursive;
  color: white;
  font-size: 38px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  @media (min-width: 768px) {
    top: 20%;
    right: 15%;
    font-size: 58px;
  }
`;

export const Dot = styled.span`
  font-size: 80px;
  color: #ff7f50;
`;
