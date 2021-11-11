import React from 'react';
// import apple from '../assets/apple.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from '../assets/logo.png';

const Navigation: React.FC = () => {
  return (
    <>
      <NavigationBar>
        <BannerLogo>
          Mickes Tryck<Dot>.</Dot>
        </BannerLogo>
        <NavLink style={{ paddingLeft: 5, textDecoration: 'none' }} to="/step1">
          <OrderButton>Beställ</OrderButton>
        </NavLink>
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
  font-family: 'Permanent Marker', cursive;
  color: #ff7f50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

export const Dot = styled.span`
  margin-bottom: 30px;
  font-size: 80px;
  color: #262a53;
`;
