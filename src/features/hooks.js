import React from 'react';
import {
  List,
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
} from 'native-base';
import UseState from './hooks/usestate';
import UseMemo from './hooks/usememo';
import UseCallback from './hooks/usecallback';
import UseEffect from './hooks/useeffect';

const Hooks = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Hooks</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <UseState />
          <UseMemo />
          <UseCallback />
          <UseEffect />
        </List>
      </Content>
    </Container>
  );
};

export default Hooks;
