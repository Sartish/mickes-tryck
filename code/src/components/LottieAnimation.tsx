import React from 'react';
import styled from 'styled-components';
require('@lottiefiles/lottie-player');

const LottieAnimation: React.FC<any> = () => {
  return (
    <>
      <WrappingLottie>
        <Lottie>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_ewdwq19u.json"
            style={{ width: '100%' }}
          ></lottie-player>
        </Lottie>
      </WrappingLottie>
    </>
  );
};

export default LottieAnimation;

export const WrappingLottie = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border: 2px black solid;
`;

export const Lottie = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 400px;
`;
