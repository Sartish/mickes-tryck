import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeaderSustainability: React.FC<any> = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Wrapper data-aos="fade-up">
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
