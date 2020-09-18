import React, { useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Lottie } from '@crello/react-lottie';
import { BsBoxArrowLeft } from 'react-icons/bs';

import Input from '../../components/Input';
import animationButtonSubmit from '../../assets/animations/submit-button.json';
import api from '../../service/api';
import history from '../../history';

import { Container, Main, ButtonBlock } from './styles';

function SignUp() {
  const formRef = useRef(null);
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const [animationState, setAnimationState] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, [initialPosition]);

  const defaultOptions = {
    loop: false,
    autoplay: animationState,
    animationData: animationButtonSubmit,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(formData) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        telephone: Yup.string().max(15).required(),
      });
      await schema.validate(formData, {
        abortEarly: false,
      });

      const { name, email, password, telephone } = formData;
      const [latitude, longitude] = initialPosition;

      await api
        .post('users', {
          name,
          email,
          password,
          telephone,
          latitude,
          longitude,
        })
        .then((response) => {
          setResult(response.data);
          setAnimationState(false);
          setInterval(() => {
            history.push('/auth/animals');
          }, 5000);
        })
        .catch((error) => {
          alert('Este email já existe, por favor tente novamente');
          return error;
        });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      (() => {
        const nameInput = formRef.current.getFieldRef('name');

        nameInput.focus();
      })();
    }
  }

  return (
    <Container>
      <BsBoxArrowLeft
        size={30}
        title="Exit"
        className="iconBack"
        onClick={handleGoBack}
      />
      <Main>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input label="Nome completo" name="name" />
            <Input label="E-mail" name="email" type="email" />
            <Input
              label="Senha"
              name="password"
              type="password"
              autoComplete="off"
            />
            <Input label="Telefone" name="telephone" mask="phone" />
          </fieldset>
          <fieldset>
            <legend>Endereço</legend>
            <Map center={initialPosition} zoom={13} style={{ height: '28rem' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={initialPosition} />
            </Map>
          </fieldset>
          <ButtonBlock>
            <button type="submit">
              <Lottie
                config={defaultOptions}
                width={200}
                playingState={animationState ? 'stopped' : 'playing'}
              />
            </button>
          </ButtonBlock>
        </Form>
      </Main>
    </Container>
  );
}

export default SignUp;
