import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Instructions: React.FC<any> = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Container>
        <StepOne data-aos="fade-left">
          <Wrapper>
            <img src="https://img.icons8.com/doodle/48/000000/newsletter.png" />
            <Header>Step One</Header>
            <Text>
              First fill out your request on email. You can attach a file of a print or photo that
              you desire. <br />
            </Text>
          </Wrapper>
        </StepOne>
        <StepTwo data-aos="fade-left">
          <Wrapper>
            <img src="https://img.icons8.com/doodle/48/000000/group.png" />
            <Header>Step Two</Header>
            <Text>
              We will asses the print and get back to you with price and delivery and time
              estimation.
            </Text>
          </Wrapper>
        </StepTwo>
        <StepThree data-aos="fade-left">
          <Wrapper>
            <img src="https://img.icons8.com/doodle/48/000000/copy-machine.png" />
            <Header>Step Three</Header>
            <Text>
              If you are satisfied with our suggestion, we will start printing your t-shirt.
            </Text>
          </Wrapper>
        </StepThree>
        <StepFour data-aos="fade-left">
          <Wrapper>
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-tshirt-protest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
            <Header>Step Four</Header>
            <Text>once we have printed your t-shirt. We will send it to you in the post.</Text>
          </Wrapper>
        </StepFour>
      </Container>
    </>
  );
};

export default Instructions;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StepOne = styled.div`
  display: flex;
  font-family: 'PT Sans', sans-serif;
  line-height: 22px;
`;

export const StepTwo = styled.div`
  display: flex;
  font-family: 'PT Sans', sans-serif;
  line-height: 22px;
`;

export const StepThree = styled.div`
  display: flex;
  font-family: 'PT Sans', sans-serif;
  line-height: 22px;
`;

export const StepFour = styled.div`
  display: flex;
  font-family: 'PT Sans', sans-serif;
  line-height: 22px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const Header = styled.h2`
  font-family: 'Montserrat', sans-serif;
  line-height: 1em;
`;

export const Text = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
`;
