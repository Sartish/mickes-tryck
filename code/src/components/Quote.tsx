import React, { useEffect } from 'react';
import styled from 'styled-components';
import wood from '../assets/woods.png';
import profileImg from '../assets/profile-picture.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Quote: React.FC<any> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container>
        <Image data-aos="fade-down" src={profileImg} alt="profile picture" />
        <ImageContainer>
          <img data-aos="fade-left" src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img data-aos="fade-left" src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img data-aos="fade-left" src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img data-aos="fade-left" src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img data-aos="fade-left" src="https://img.icons8.com/fluency/48/000000/star.png" />
        </ImageContainer>
        <Heading data-aos="fade-down">
          “Hos Micke får man personlig service och kvalitet på tishan!”
        </Heading>
      </Container>
    </>
  );
};

export default Quote;

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${wood});
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const Heading = styled.h1`
  background-image: linear-gradient(rgba(255, 127, 80, 0.6), rgba(255, 127, 80, 0.6));
  padding: 20px;
  color: white;
  position: absolute;
  display: flex;
  font-family: 'Scheherazade New', serif;
  font-size: 20px;
  line-height: 1em;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 400px;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-top: 300px;
  }
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 4px solid white;
  @media (min-width: 768px) {
    margin-top: -120px;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
  }
`;
