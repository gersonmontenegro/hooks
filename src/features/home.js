import React from 'react';
import {List, Container, Header, Title, Content, Left, Right, Body} from 'native-base';
import OptionItem from './components/OptionItem';

const Home = ({ navigation }) => {
  const onClickHooks = menu => () => {
    navigation.navigate(menu);
  };
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Main</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <OptionItem name="Basic Memo" onPressEvent={onClickHooks('BasicMemo')} />
          <OptionItem name="Memo with Components" onPressEvent={onClickHooks('WithComponents')} />
          <OptionItem name="Selectors" onPressEvent={onClickHooks('Selectors')} />
          <OptionItem name="Hooks" onPressEvent={onClickHooks('Hooks')} />
        </List>
      </Content>
    </Container>
  );
};

export default Home;
