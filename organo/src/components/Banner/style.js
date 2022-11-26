import styled from 'styled-components';

export const WrapperBanner = styled.section`
  display: flex;
  justify-content: center;
  background-color: #6278f7;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 0 0 0;
  }

  .wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 1200px;
    width: 100%;

    @media screen and (min-width: 1024px) {
      justify-content: space-between;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article h2 {
    color: #212121;
    font-size: 2.25rem;
    font-family: 'Roboto Mono', monospace;

    @media screen and (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }

  article h3 {
    color: #212121;
    font-size: 1.75rem;
    font-family: 'Roboto Mono', monospace;

    @media screen and (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  .image {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
`;
