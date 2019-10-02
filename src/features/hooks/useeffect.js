import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardItem,
  Button,
  Text,
  Body,
  Right,
} from 'native-base';

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const onClickChange = () => {
        setCounter(counter + 1);
    };
    useEffect(() => {
        console.log('Executing action...');
        return () => {
            alert('side effect!');
        }
    }, [counter]);
    return (
        <Card>
            <CardItem header style={{ backgroundColor: '#440066' }}>
                <Text style={{ color: 'white' }}>useEffect</Text>
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
        </Card>
    );
};

export default UseEffect;
