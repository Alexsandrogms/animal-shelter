import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  svg.iconBack {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--color-primary-lighter);
    cursor: pointer;
  }

  @media (min-width: 700px) {
    width: 100vw;
    position: relative;

    svg.iconBack {
      top: 20px;
      left: 20px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  padding: 6.4rem 0.8rem;
  margin: 0 auto 3.2rem;
  overflow: hidden;

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    legend {
      font: 700 2.4rem Roboto;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);
    }

    fieldset + fieldset {
      margin-top: 6.4rem;
    }

    @media (min-width: 700px) {
      padding: 4.4rem;
      transform: translateY(-0.2rem);

      fieldset {
        padding: 0;
      }
    }
  }
`;

export const ButtonBlock = styled.div`
  padding: 4.4rem 2rem;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
  }

  @media (min-width: 700px) {
    border: 0;
    padding: 0 3.8rem;

    button {
      transition: all 0.8s;
      &:hover {
        box-shadow: 0 0 0.2rem var(--color-secondary);
      }
    }
  }
`;
