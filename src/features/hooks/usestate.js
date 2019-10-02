import React, { useState } from 'react';
import {
  List,
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Card,
  CardItem,
  Item,
  Button,
  Body,
  Text,
} from 'native-base';

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const onClickButton = () => {
    setCounter(counter + 1);
  };
  return (
    <Card>
        <CardItem header style={{ backgroundColor: '#003355' }}>
            <Text style={{ color: 'white' }}>useState</Text>
        </CardItem>
        <Button onPress={onClickButton} block small style={{ marginLeft: 5, marginRight: 5, marginTop: 3 }} success>
            <Text>Increase counter</Text>
        </Button>
        <CardItem>
            <Body>
                <Text>{counter}</Text>
            </Body>
        </CardItem>
    </Card>
);
};

export default UseState;
