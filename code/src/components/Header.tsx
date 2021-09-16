import React from 'react';
import styled from 'styled-components';

const Header: React.FC<any> = () => {
  return (
    <>
      <Heading>Vi fixar personliga tishan</Heading>
    </>
  );
};

export default Header;

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;
