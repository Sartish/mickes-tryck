import React from 'react';
// import apple from '../assets/apple.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from '../assets/logo.png';
import swal from 'sweetalert';

const Navigation: React.FC = () => {
  return (
    <>
      <NavigationBar>
        <BannerLogo>
          <Logo>Mickes Tryck</Logo>
          <Dot>.</Dot>
        </BannerLogo>
          <OrderButton onClick={() => {
              swal({
                  title: 'Beställ',
                  text: 'Skicka ett mail till micke@mickestryck.se med information om vad du vill ha tryckt. Vi återkommer med pris och hur långtid det kommer ta.',
                  icon: 'info',
                  // @ts-ignore
                  button: 'ok',
              });
          }}>Beställ</OrderButton>
      </NavigationBar>
    </>
  );
};

export default Navigation;

const ParagraphFont = "'Roboto', sans-serif;";
const blue = '#262A53';
// const Gray = '#F5F5F5';

const NavigationBar = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const OrderButton = styled.button`
  display: inline-block;
  color: white;
  background-color: #ff7f50;
  width: 110px;
  border: none; 
  text-align: center;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  font-family: ${ParagraphFont};
  font-size: 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  margin-right: 30px;
  :hover {
    color: white;
    background-color: ${blue};
    border:1px solid ${blue};
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;

export const BannerLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direaction: row;
  margin-left: 30px;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

const Logo = styled.h1`
  font-family: 'Permanent Marker', cursive;
  color: #ff7f50;
  font-size: 20px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Dot = styled.span`
  font-family: 'Permanent Marker', cursive;
  margin-bottom: 17px;
  font-size: 40px;
  color: #262a53;
  @media (min-width: 768px) {
    font-size: 80px;
  }
`;
