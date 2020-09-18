import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-background);
  position: relative;

  svg.iconBack {
    position: absolute;
    width: 30px;
    top: 20px;
    left: 20px;
    color: var(--color-primary-lighter);
    cursor: pointer;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;

    svg.iconBack {
      width: 40px;
    }
  }
`;

export const Main = styled.main`
  margin: 16rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 94%;
  padding-top: 3.4rem;
  box-shadow: 0 0 0.6rem var(--color-text-label);
  border-radius: 0.4rem;

  form {
    width: 100%;
    margin-top: 2rem;
    padding: 2.6rem;
    position: relative;
  }

  @media (min-width: 700px) {
    height: 80%;
    width: 44%;
    padding: 4.4rem;
    box-shadow: 0 0 0.6rem var(--color-text-label);
    margin: 0;

    form {
      margin-top: 4rem;
      padding: 2.6rem;
    }
  }
`;

export const Title = styled.h1`
  line-height: 3.4rem;
  color: var(--color-text-title);
  text-align: center;
  width: 34rem;
  font-size: 2.8rem;

  @media (min-width: 700px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 6rem;
  margin: 3.4rem auto 0;

  cursor: pointer;
  font: 700 2rem Roboto;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0.6rem 0.6rem 0 var(--color-line-in-white);
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-button-text);
  background: var(--color-primary);
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-primary-dark);
  }

  svg {
    margin-left: 1rem;
  }
`;
