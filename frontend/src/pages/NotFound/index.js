import React from 'react';
import { BsBoxArrowLeft } from 'react-icons/bs';

import { Container, Content } from './styles';
import history from '../../history';

function NotFound() {
  function handleGoBack() {
    history.push('/');
  }

  return (
    <Container>
      <BsBoxArrowLeft size={40} title="Exit" onClick={handleGoBack} />
      <Content />
    </Container>
  );
}

export default NotFound;
