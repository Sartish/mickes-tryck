import React from 'react';
import styled from 'styled-components';

const Steps: React.FC<any> = () => {
  return (
    <>
      <WrappingSteps>
        <WrappingNumberAndText>
          <Number>
            <img src="https://img.icons8.com/ios/50/000000/1-circle.png" alt="number" />
          </Number>
          <p>Har du något du vill trycka, fylle i formuläret</p>
        </WrappingNumberAndText>
        <WrappingNumberAndText>
          <Number>
            <img src="https://img.icons8.com/ios/50/000000/2-circle.png" alt="number" />
          </Number>
          <p>Vi kollar, can this be done? - </p>
        </WrappingNumberAndText>
        <WrappingNumberAndText>
          <Number>
            <img src="https://img.icons8.com/ios/50/000000/3-circle.png" alt="number" />
          </Number>
          <p>Vår printer trycker din t-sha </p>
        </WrappingNumberAndText>
      </WrappingSteps>
    </>
  );
};

export default Steps;

export const Header = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const WrappingSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const WrappingNumberAndText = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const Number = styled.div`
  display: flex;
  margin-right: 6px;
`;
