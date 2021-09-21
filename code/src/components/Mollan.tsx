import React from 'react';
import styled from 'styled-components';
import mollan from '../assets/mollan.png';

const Mollan: React.FC<any> = () => {
  return (
    <>
      <img style={{ display: 'flex', width: 400 }} src={mollan} alt="hej" />
    </>
  );
};

export default Mollan;

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;
