import React from 'react';
import styled from 'styled-components';
import womancircles from '../assets/womancircles.png';
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
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  // margin: 50px;
`;

export const BannerHeader = styled.div`
  color: #ff7f50;
  position: absolute;
  top: 20%;
  left: 10%;
  font-family: 'Scheherazade New', serif;
  font-size: 70px;
  line-height: 1em;
`;
export const BannerButton = styled.button`
  display: inline-block;
  color: white;
  background-color: ${blue};
  width: 150px;
  border: 2px solid ${blue};
  text-align: center;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  font-family: ${ParagraphFont};
  font-size: 20px;
  border-radius: 10px;
  text-decoration: none;
  position: absolute; 
  top: 70%;
  left: 10%;

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
  font-size: 58px;
  position: absolute;
  top: 5%;
  right: 15%;
  line-height: 3em;
`;

export const Dot = styled.span`
  font-size: 80px;
  color: #ff7f50;
`;
