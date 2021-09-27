import React from 'react';
import styled from 'styled-components';

const Quote: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Heading>
          “Hos Micke får man personlig service, och lokalen liggger mitt i möllan, hippie centrum!”
        </Heading>
      </Container>
    </>
  );
};

export default Quote;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Heading = styled.h1`
  font-size: 30px;
  display: flex;
  color: #262a53;
  width: 600px;
  font-family: 'Arvo', serif;
  line-height: 1.6;
`;
