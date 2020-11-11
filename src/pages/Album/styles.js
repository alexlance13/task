import styled from 'styled-components';

export const AlbumsDiv = styled.div`
  display: grid;
  grid-template: 1fr / repeat(6, 1fr);
  margin: 0 auto;
  grid-gap: 25px;
  @media (max-width: 1100px) {
    grid-template: 1fr / repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template: 1fr / repeat(2, 1fr);
  }
`;
