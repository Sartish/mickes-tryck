import React from 'react';
import styled from 'styled-components';

const HeaderSustainability: React.FC<any> = () => {
  return (
    <>
      <Wrapper>
        <Heading>T-shirts are made of 100% recycled material</Heading>
      </Wrapper>
    </>
  );
};

export default HeaderSustainability;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 38px;
  color: #ff7f50;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  line-height: 1em;
  font-weight: 400;
`;
