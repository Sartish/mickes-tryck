import React from 'react';
// import apple from '../assets/apple.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from '../assets/logo.png';

const Navigation: React.FC = () => {
  return (
    <>
      <NavigationBar>
        <Hamburger></Hamburger>
        <Logo>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <img style={{ display: 'flex', width: 200 }} src={logo} alt="hej" />
          </NavLink>
        </Logo>
        <RightNav>
          <NavLink style={{ paddingLeft: 5, textDecoration: 'none' }} to="/step1">
            <OrderButton>Order</OrderButton>
          </NavLink>
          <NavLink style={{ paddingLeft: 5, textDecoration: 'none' }} to="/about">
            <AboutButton>About</AboutButton>
          </NavLink>
        </RightNav>
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
  margin-bottom: 25px;
  align-items: center;
  border-radius: 2px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Hamburger = styled.div`
  display: flex;
  width: 35px;
  height: 5px;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const Logo = styled.div`
  justify-content: flex-end;
  @media (min-width: 768px) {
    justify-content: space-between;
    margin-left: 0px;
  }
`;

const RightNav = styled.div`
  display: flex;
  width: 210px;
  margin-right: 10px;
`;

const OrderButton = styled.button`
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
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: ${blue};
    border:1px solid ${blue};
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;

const AboutButton = styled.button`
  display: inline-block;
  color: ${blue};
  background-color: white;
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
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: ${blue};
    border:1px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
