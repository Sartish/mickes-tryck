import React from 'react';
import styled from 'styled-components';

const Header: React.FC<any> = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          Here are some of the benefits of <br /> your offer
        </Heading>
        <Text>
          Explain what makes your product or service great. Talk about features in a way that
          highlights the real value people get out of them.
        </Text>
      </Wrapper>
    </>
  );
};

export default Header;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 48px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  line-height: 1em;
  font-weight: 400;
  color: #262a53;
`;

export const Text = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  text-align: center;
  width: 400px;
  line-height: 22px;
`;
