import React from 'react';
import styled from 'styled-components';

const Footer: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Heading>@copyright</Heading>
      </Container>
    </>
  );
};

export default Footer;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262a53;
  height: 50px;
`;
export const Heading = styled.h1`
  font-size: 22px;
  display: flex;
  color: white;
  font-family: 'Arvo', serif;
  margin: 0;
`;
