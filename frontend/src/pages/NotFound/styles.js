import styled from 'styled-components';

import notFound from '../../assets/images/not-found.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    top: 20px;
    left: 20px;
    color: var(--color-primary-lighter);
    cursor: pointer;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${notFound});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 700px) {
    height: 90vh;
    width: 90vw;
  }
`;
