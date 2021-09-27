import styled from 'styled-components';
// import annanas from '../assets/annanas.png';
import woman from '../assets/woman.png';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${woman});
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: contain;
  margin: 15px;
  font-size: 4em;
`;
