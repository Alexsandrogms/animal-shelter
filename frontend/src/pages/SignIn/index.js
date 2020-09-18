import React, { useRef, useContext } from 'react';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';
import history from '../../history';

import { AuthContext } from '../../components/Context/AuthContext';

import { Container, Main, Button, Title } from './styles';

function SignIn() {
  const formRef = useRef(null);
  const { handleLogin } = useContext(AuthContext);

  function handleGoBack() {
    history.push('/');
  }

  async function handleSubmit(formData) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(formData, {
        abortEarly: false,
      });

      handleLogin(formData);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      (() => {
        const nameInput = formRef.current.getFieldRef('email');

        nameInput.focus();
      })();
    }
  }
  return (
    <Container>
      <BsBoxArrowLeft
        size={40}
        title="Exit"
        className="iconBack"
        onClick={handleGoBack}
      />
      <Main>
        <Title>Falta pouco para poder adotar seu bichinho</Title>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="E-mail" name="email" type="email" />
          <Input label="Senha" name="password" type="password" />
          <Button type="submit">
            Acessar
            <FiLogIn size={20} />
          </Button>
        </Form>
      </Main>
    </Container>
  );
}

export default SignIn;
