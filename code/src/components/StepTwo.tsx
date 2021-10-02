import React from 'react';
import styled from 'styled-components';

const StepTwo: React.FC<any> = () => {
  return (
    <>
      <Container>
        <h1>Step two</h1>
      </Container>
    </>
  );
};

export default StepTwo;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
