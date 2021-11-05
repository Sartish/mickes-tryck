import React from 'react';
import styled from 'styled-components';
import tshirt from '../assets/t-shirt.jpg';

const Banner: React.FC<any> = () => {
  return (
    <>
      <BannerContent>
        <BannerHeader>
          Get your <br /> personal print <br /> on a sustainable t-shirt.
        </BannerHeader>
        <BannerButton>Order</BannerButton>
        <BannerLogo>
          Mickes Tryck<Dot>.</Dot>
        </BannerLogo>
      </BannerContent>
    </>
  );
};

export default Banner;

const blue = '#262A53';
const ParagraphFont = "'Roboto', sans-serif;";

export const BannerContent = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${tshirt});
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const BannerHeader = styled.div`
  color: #ff7f50;
  position: absolute;
  top: 20%;
  left: 10%;
  font-family: 'Scheherazade New', serif;
  font-size: 60px;
  line-height: 1em;
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
    left: 50%;
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
