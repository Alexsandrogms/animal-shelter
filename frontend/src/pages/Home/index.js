import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import animalShelter from '../../assets/images/animal-shelter.svg';

import { Container, Image, Title, Text, Content, ButtonGroup } from './styles';

function Home() {
  return (
    <Container>
      <Content>
        <Title>
          Adoção é <span>Amor</span>
          <br />
          Um laço para toda <span>Vida</span>
        </Title>
        <ButtonGroup>
          <Link to="/sign-in" className="button">
            Adotar <FaHeart />
          </Link>
          <Text>
            Não possui cadastro? <Link to="/sign-up">Cadastra-se</Link>
          </Text>
        </ButtonGroup>
      </Content>
      <Image src={animalShelter} alt="Animal Shelter" />
    </Container>
  );
}

export default Home;
