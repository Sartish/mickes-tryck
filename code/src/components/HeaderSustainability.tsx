import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeaderSustainability: React.FC<any> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Wrapper data-aos="fade-up">
        <Heading>T-shirts är utan 100% återvunnet matrial</Heading>
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
  margin-top: 40px;
`;

export const Heading = styled.h1`
  font-size: 38px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  line-height: 1em;
  font-weight: 400;
  color: #262a53;
  transition: 0.5s;
`;
