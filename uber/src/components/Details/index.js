import React from 'react';

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';

import uberx from '../../assets/uberx.png';

export default class Details extends React.Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypeImage source={uberx} />
        <TypeDescription>R$ 6,00</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>Solicitar Uberx</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
