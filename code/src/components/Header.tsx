import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header: React.FC<any> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Wrapper>
        <Heading data-aos="fade-up">Vi fixar personliga tisha!</Heading>
        <Text>Få ditt personliga tryck på en återvunnen t-shirt.</Text>
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

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Text = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 24px;
  text-align: center;
  width: 400px;
  line-height: 1em;
  color: #262a53;
`;
