import React, { useMemo, useCallback, useState, useEffect } from 'react';
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
  Right,
} from 'native-base';
import { selectFilteredData } from 'reducers/reselectReducer';

const avatar = require('assets/img/captain.png');
const functions = new Set();

const UseCallback = () => {
    const [counter, setCounter] = useState(0);
    const users = useSelector(selectFilteredData);
    const actionOnClick = (par) => {
        console.log("-->", par);
        alert("You've clicked me!", par);
    };
    const onClickPush = useCallback((par) => (
        event => {
            actionOnClick(par)
        }
    ), []);
    // const onClickPush = useCallback(() => {
    //     actionOnClick();
    // }, []);
    // const onClickPush = actionOnClick;

    functions.add(onClickPush);

    const usersList = () => {
        return users.map(item => (
                <ListItem key={item.id} avatar>
                    <Left>
                        <Thumbnail source={avatar} />
                    </Left>
                    <Body>
                        <Text>{`${item.first_name} ${item.last_name}`}</Text>
                    </Body>
                    <Right>
                        <Button small success onPress={onClickPush(item.last_name)}>
                            <Text>
                                Push!
                            </Text>
                        </Button>
                    </Right>
                </ListItem>
            )
        )
    };

    const createList = useMemo(() => usersList(), [users]);

    const onClickChange = () => {
        setCounter(counter + 1);
    };

    return (
        <Card>
            <CardItem header style={{ backgroundColor: '#224400' }}>
                <Text style={{ color: 'white' }}>useCallback</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Button info onPress={onClickChange} small>
                        <Text>
                            Change
                        </Text>
                    </Button>
                </Body>
                <Right>
                    <Text>
                        {counter}
                    </Text>
                </Right>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        Functions created
                    </Text>
                </Body>
                <Right>
                    <Text>
                        {functions.size}
                    </Text>
                </Right>
            </CardItem>
            <List>
                {
                    createList
                }
            </List>
        </Card>
    );
};

export default UseCallback;
