import styled from 'styled-components';

export const WrapperHeader = styled.header`
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.35));
  background-color: #fff;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const Link = styled.a`
  color: #555555;
  font-size: 1.25rem;
  text-decoration: none;
`;
