import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMicke: React.FC<any> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Container>
        <Image
          data-aos="fade-right"
          src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/82815042_10157342737357639_1100192556186075136_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vZas4TAfQTAAX9SyfPX&_nc_ht=scontent.fsvg1-1.fna&oh=ef34a3167f85888274943998af762b1c&oe=61AA58AD"
          alt="profile picture"
        />
        <TextContainer>
          <Header data-aos="fade-left">Varför startade jag Mickes tryck?</Header>
          <Paragraph data-aos="fade-left">
            Jag älskar t-shirts! Jag älskar tryck och vill vara rädd om naturen⛰. Så jag startade
            den här webbplatsen för att om det finns andra där ute som känner likadant👀. Så just nu
            är det jag och min skrivare i Malmö som gör jobbet. Tishorna håller en bra kvalitet utan
            att göra några avtryck i vår miljö 💚 Just nu är sidan i ett order-on-demand stadie. Så
            skicka mail till micke@mickestryck.se med din förfrågan.
          </Paragraph>
        </TextContainer>
      </Container>
    </>
  );
};

export default AboutMicke;

export const Container = styled.div`
  background-color: #f2d7d5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  color: #262a53;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 300px;
  margin: 20px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Header = styled.h3`
  background-image: linear-gradient(rgba(255, 127, 80, 0.6), rgba(255, 127, 80, 0.6));
  padding: 20px;
  font-size: 20px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: bold;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
`;

export const Image = styled.img`
  height: 300px;
  width: 300px;
  margin: 20px;

  @media (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`;
