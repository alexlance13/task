import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: #4a148c;
  height: 65px;
  display: grid;
  grid-template: 1fr / 1fr max-content;
  & > a:first-child {
    font-size: 2.1em;
    font-weight: 750;
    justify-self: start;
    padding-left: 35px;
    @media (max-width: 500px) {
      padding-left: 15px;
    }
  }
  ul {
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template: 1fr / 1fr;
    li {
      padding-right: 30px;
      align-self: center;
      justify-self: right;
      @media (max-width: 500px) {
        padding-right: 15px;
      }
    }
  }
  a {
    font-size: 1.2em;
    font-weight: 500;
    color: #f3e5f5;
    text-decoration: none;
    align-self: center;
    justify-self: center;
  }
`;
