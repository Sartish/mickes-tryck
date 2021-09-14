import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
// import apple from '../assets/apple.png';

const NavBar: React.FC = (props) => {
  return (
    <>
      <Nav>
        <NavContent>
          <NavItems>
            <PrimaryNavItems>
              <div>
                <Links href="#">
                  <img src="../assets/apple.png" alt="Logo" />
                </Links>
              </div>
              <NavLinks>
                <ATag href="">Home</ATag>
                <ATag href="">Services</ATag>
                <ATag href="">About</ATag>
                <ATag href="">Contact Us</ATag>
              </NavLinks>
            </PrimaryNavItems>
          </NavItems>
        </NavContent>
      </Nav>
      <Heading>HEADING</Heading>

      <button className="flex bg-indigo-600">press me</button>
      <h1>
        <Link to="/"> go to the home page</Link>
      </h1>
    </>
  );
};

export default NavBar;

// const Nav = tw.div`
// flex
// items-center
// justify-center
// flex-col
// w-full
// bg-indigo-600
// `;
export const Nav = styled.div`
  ${tw`bg-white shadow-lg`}
`;
export const NavContent = styled.div`
  ${tw`max-w-6xl mx-auto px-4`}
`;
export const NavItems = styled.div`
  ${tw`flex justify-between`}
`;
export const PrimaryNavItems = styled.div`
  ${tw`flex space-x-7`}
`;

export const NavLinks = styled.div`
  ${tw`hidden md:flex items-center space-x-1`}
`;

export const ATag = styled.a`
  ${tw`py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold`}
`;

export const Links = styled.a`
  ${tw`flex space-x-7`}
`;

export const Heading = styled.div`
  ${tw`flex justify-center items-center h-screen`}
`;
