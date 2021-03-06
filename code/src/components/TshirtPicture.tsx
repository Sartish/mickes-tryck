import React from 'react';
import styled from 'styled-components';
import tshirt from '../assets/printer.png';

const TshirtPicture: React.FC<any> = () => {
  return (
    <Wrapper>
      <IMG src={tshirt} alt="hej" />
      <Text>T-shirtsen är gjorda på återvunnen bomull och återvunna plastflaskor.</Text>
    </Wrapper>
  );
};

export default TshirtPicture;

export const Wrapper = styled.div`
  display: flex;
  jurstify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  width: 300px;
  font-size: 20px;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  margin-top: 0;
`;

export const IMG = styled.img`
  display: flex;
  background: #eee;
  margin: 0;
  width: 400px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
