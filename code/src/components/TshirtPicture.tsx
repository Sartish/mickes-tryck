import React from 'react';
import styled from 'styled-components';
import tshirt from '../assets/tshirt.png';

const TshirtPicture: React.FC<any> = () => {
  return (
    <>
      <img style={{ display: 'flex', width: 400 }} src={tshirt} alt="hej" />
    </>
  );
};

export default TshirtPicture;

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;
