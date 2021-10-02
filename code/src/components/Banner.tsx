import React from 'react';
import styled from 'styled-components';
import womancircles from '../assets/womancircles.png';

const Banner: React.FC<any> = () => {
  return (
    <>
      <BannerContent>
        <BannerHeader>Vill du ha ett personligt tryck på en miljövänlig t-shirt?</BannerHeader>
        <BannerButton>Order</BannerButton>
      </BannerContent>
    </>
  );
};

export default Banner;

const blue = '#262A53';
const ParagraphFont = "'Roboto', sans-serif;";

export const BannerHeader = styled.div`
  color: #262a53;
  position: absolute;
  top: 20%;
  left: 10%;
  font-family: 'Arvo', serif;
  font-size: 28px;
`;
export const BannerContent = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${womancircles});
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 50px;
`;
export const BannerButton = styled.button`
display: inline-block;
color: white;
background-color: ${blue};
width: 100px;
border: 2px solid ${blue};
text-align: center;
font-weight: bold;
padding: 10px;
cursor: pointer;
font-family: ${ParagraphFont};
font-size: 16px;
border-radius: 10px;
text-decoration: none;
position: absolute; 
top: 60%;
left: 30%;

transition: background-color 1s ease-in, color 1s ease-in;
:hover {
  color: white;
  background-color: ${blue};
  border:1px solid ${blue};
  transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
