import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template: 1fr / 15% 70% 15%;
  user-select: none;
`;

export const ImageDiv = styled.div`
  margin: 0 auto;
  align-self: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ArrowDiv = styled.div`
  margin: 0 auto;
  font-size: 60px;
  align-self: center;
`;
