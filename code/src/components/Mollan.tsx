import React from 'react';
import styled from 'styled-components';
import mollan from '../assets/hero.png';

const Mollan: React.FC<any> = () => {
  return (
    <Wrapper>
      <IMG src={mollan} alt="hej" />
      <Text>
        Our t-shirt att printed on 100% recycble cotton and our printer is located in Möllan, Sweden
      </Text>
    </Wrapper>
  );
};

export default Mollan;

export const Wrapper = styled.div`
  display: flex;
  jurstify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 8px -4px lightblue;
  margin: 50px;
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
  width: 300px;
  @media (prefers-reduced-motion: no-preference) {
    .square-IMG {
      animation: wipe-enter 1s 1;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
  }
`;
