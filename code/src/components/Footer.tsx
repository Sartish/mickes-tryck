import React from 'react';
import styled from 'styled-components';

const Footer: React.FC<any> = () => {
  return (
    <>
      <Container>
        <BannerLogo>
          Mickes Tryck<Dot>.</Dot>
        </BannerLogo>
          <Heading>micke@mickestryck.se</Heading>
        <Heading>@2021 Mickes tryck. All rights reserved.</Heading>
      </Container>
    </>
  );
};

export default Footer;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;
  background-color: #262a53;
  height: 100px;
`;
export const Heading = styled.p`
  font-size: 12px;
  display: flex;
  color: white;
  font-family: 'Arvo', serif;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BannerLogo = styled.h1`
  font-family: 'Permanent Marker', cursive;
  color: white;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Dot = styled.span`
  font-size: 20px;
  color: #ff7f50;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
