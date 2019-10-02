import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    CardItem,
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';
import { add, memoAdd } from './providers';
import { addMemoCount, addNoMemoCount } from '../actions';

const BasicMemo = ({ navigation }) => {
    const [noMemoSum, setNoMemoSum] = useState(0);
    const [memoSum, setMemoSum] = useState(0);
    const noMemoCounter = useSelector(state => state.countersReducer.noMemoCounter);
    const memoCounter = useSelector(state => state.countersReducer.memoCounter);
    const dispatch = useDispatch();
    const onClickBack = () => {
        navigation.navigate('Home');
    };
    const onClickSumNoMemo = () => {
        setNoMemoSum( add(10, dispatch, addNoMemoCount) );
    };
    const onClickSumMemoized = () => {
        setMemoSum( memoAdd(10, dispatch, addMemoCount) );
    };
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={onClickBack}>
                        <Icon name="ios-arrow-round-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Basic Memo</Title>
                </Body>
                <Right />
        </Header>
        <Content>
            <Card>
                <CardItem header>
                    <Text>No memo Function / calculating value</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button small onPress={onClickSumNoMemo}>
                            <Text>Sum</Text>
                        </Button>
                    </Body>
                    <Text>{noMemoSum}</Text>
                    <Right>
                        <Text>{noMemoCounter}</Text>
                    </Right>
                </CardItem>
            </Card>
            <Card>
                <CardItem header>
                    <Text>Memo Function / using cache</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button small success onPress={onClickSumMemoized}>
                            <Text>Sum</Text>
                        </Button>
                    </Body>
                    <Text>{memoSum}</Text>
                    <Right>
                        <Text>{memoCounter}</Text>
                    </Right>
                </CardItem>
            </Card>
        </Content>
        </Container>
    );
};

export default BasicMemo;
