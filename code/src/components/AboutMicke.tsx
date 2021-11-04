import React from 'react';
import styled from 'styled-components';

const AboutMicke: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Image
          src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/82815042_10157342737357639_1100192556186075136_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vZas4TAfQTAAX9SyfPX&_nc_ht=scontent.fsvg1-1.fna&oh=ef34a3167f85888274943998af762b1c&oe=61AA58AD"
          alt="profile picture"
        />
        <TextContainer>
          <Header>Why did I start Mickes Tryck?</Header>
          <Paragraph>
            I love t-shirts I love prints and I love nature⛰. So I kinda started this website to see
            so if there are others out there who also like a nice personal print on a t-shirt 👀. So
            right now it is me, and my printer in Malmo doing the job. The t-shirts I also belive
            holds the best quality and does not leave any mark on our environment 💚 Right now the
            page is a order on demand stage. So just either send me an email with your name and
            print and I will come back to you 🤗
          </Paragraph>
        </TextContainer>
      </Container>
    </>
  );
};

export default AboutMicke;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid black;
  padding: 20px;
  color: #262a53;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 400px;
  margin: 20px;
`;

export const Header = styled.h3`
  font-size: 38px;
  font-family: 'Montserrat', sans-serif;
  font-size: bold;
`;

export const Paragraph = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
`;
export const Image = styled.img`
  height: 400px;
  width: 400px;
  margin: 20px;

  @media (min-width: 768px) {
  }
`;