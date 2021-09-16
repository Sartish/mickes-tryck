import React from 'react';
import styled from 'styled-components';

const Quote: React.FC<any> = () => {
  return (
    <>
      <Heading>
        “Hos Micke får man personlig service, och lokalen liggger mitt i möllan, hippie centrum!”
      </Heading>
    </>
  );
};

export default Quote;

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;
