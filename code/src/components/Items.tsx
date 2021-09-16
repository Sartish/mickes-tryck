import styled from 'styled-components';
import annanas from '../assets/annanas.png';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${annanas});
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
