import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AlbumsDiv = styled.div`
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  margin: 0 auto;
  grid-gap: 35px;
  @media (max-width: 800px) {
    grid-template: 1fr / repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template: 1fr / 1fr;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  border: 0.5px solid rgb(144, 164, 174);
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
  &:hover {
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
  }
`;
