import React from 'react';
import styled from 'styled-components';
import wood from '../assets/wood.png';
import profileImg from '../assets/profile-picture.jpg';

const Quote: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Heading>“Hos Micke får man personlig service och kvalitet på tishan!”</Heading>
        <Image src={profileImg} alt="profile picture" />
        <ImageContainer>
          <img src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img src="https://img.icons8.com/fluency/48/000000/star.png" />
          <img src="https://img.icons8.com/fluency/48/000000/star.png" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Quote;

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${wood});
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
export const Heading = styled.h1`
  color: white;
  position: absolute;
  bottom: 20%;
  left: 30%;
  font-family: 'Scheherazade New', serif;
  font-size: 30px;
  line-height: 1em;
`;

export const Image = styled.img`
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%; /* så vi får bilden rund*/
  border: 4px solid white;
  top: 20%;
  left: 47%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 47%;
`;
