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
    Text,
    List,
    ListItem,
    Icon,
    Thumbnail,
    Item,
    Input,
} from 'native-base';
import { add, memoAdd } from './providers';
import { addMemoCount, addNoMemoCount } from '../actions';
// import Icon from 'react-native-vector-icons/Ionicons';
import data from './../features/providers/data';
import ReselectReducerList from 'components/reselectreducerlist';
import RegulartReducerList from './components/regulartreducerlist';

const Selectors = ({ navigation }) => {
    const onClickBack = () => {
        navigation.navigate('Home');
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
                    <Title>Selectors</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <RegulartReducerList />
                <ReselectReducerList />
            </Content>
        </Container>
    );
};

export default Selectors;
