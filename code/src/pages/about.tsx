import React from 'react';
import { Link } from 'react-router-dom';
import IPage from '../interfaces/pages';

const AboutPage: React.FC<IPage> = (props) => {
  return (
    <h1>
      this is a about page
      <Link to="/"> go to the home page</Link>
    </h1>
  );
};

export default AboutPage;
