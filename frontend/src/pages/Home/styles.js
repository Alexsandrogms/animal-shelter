import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 700px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font: 700 3.6rem Roboto;
  color: var(--color-text-base);

  span {
    font: 700 3.6rem Roboto;
    color: var(--color-primary);
  }

  @media (min-width: 700px) {
    font-size: 4.4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40rem;
  padding: 0;

  @media (min-width: 700px) {
    height: 34rem;
    justify-content: space-between;
    padding: 2.8rem 1.4rem 0 1.4rem;
  }
`;

export const ButtonGroup = styled.div`
  a.button {
    width: 100%;
    height: 8rem;
    border-radius: 0.8rem;
    font: 700 2rem Roboto;
    box-shadow: 0.6rem 0.6rem 0 var(--color-line-in-white);

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    background: var(--color-primary);

    transition: background-color 0.2s;

    &:hover {
      background: var(--color-primary-dark);
    }

    svg {
      width: 4rem;
      color: var(--color-secondary-dark);
    }
  }

  @media (min-width: 700px) {
    margin: 0;

    a.button {
      width: 28rem;
    }
  }
`;

export const Text = styled.p`
  margin: 1.4rem 0.8rem;

  a {
    text-decoration: none;
    color: var(--color-primary-lighter);
    font: 700 1.6rem Roboto;
  }
`;
