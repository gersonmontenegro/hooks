import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardItem,
  Button,
  Text,
  Left,
  ListItem,
  List,
  Thumbnail,
  Body,
} from 'native-base';
import { selectFilteredData } from 'reducers/reselectReducer';

const avatar = require('assets/img/batman.png');

const UseMemo = () => {
    const users = useSelector(selectFilteredData);
    const usersList = () => (
        users.map(item => (
                <ListItem key={item.id} avatar>
                    <Left>
                        <Thumbnail source={avatar} />
                    </Left>
                    <Body>
                        <Text>{`${item.first_name} ${item.last_name}`}</Text>
                    </Body>
                </ListItem>
            )
        )
    );
    // const createList = () => usersList();
    const createList = useMemo(() => usersList(), [users]);
    return (
        <Card>
            <CardItem header style={{ backgroundColor: '#0066ee' }}>
                <Text style={{ color: 'white' }}>useMemo</Text>
            </CardItem>
            <List>
                {
                    createList
                }
            </List>
        </Card>
    );
};

export default UseMemo;
