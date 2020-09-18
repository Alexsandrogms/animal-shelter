import styled from 'styled-components';

export const InputBlock = styled.div`
  margin: 1.6rem 0;

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    color: var(--color-text-label);

    input {
      width: 100%;
      height: 5rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      padding: 2rem 1.6rem;
      font: 1.6rem Roboto;

      &:focus-within {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid var(--color-primary-dark);
      }

      &.has-error {
        &:focus-within {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: 1px solid var(--color-text-span);
        }
      }
    }
  }

  span.error {
    font: 400 1.4rem Roboto;
    color: var(--color-text-span);
  }

  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 0;
    }
  }
`;
