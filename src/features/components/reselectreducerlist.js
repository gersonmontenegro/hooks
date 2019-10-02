import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    CardItem,
    Left,
    Body,
    Text,
    ListItem,
    Icon,
    Thumbnail,
    Item,
    Input,
} from 'native-base';
import { setFilter } from 'actions';
import { selectFilteredData } from 'reducers/reselectReducer';

const avatar = require('assets/img/batman.png');

const ReselectReducerList = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const newData = useSelector(selectFilteredData);

    const createNormalList = () => (
        newData.map(item => {
                return (
                    <ListItem key={item.id.toString()} avatar>
                        <Left>
                            <Thumbnail source={avatar} />
                        </Left>
                        <Body>
                            <Text>{`${item.first_name} ${item.last_name}`}</Text>
                        </Body>
                    </ListItem>
                )
            }
        )
    );

    const onChangeText = text => {
        setInputValue(text);
        dispatch( setFilter(text.toLowerCase()) );
    };

    return (
        <Card>
            <CardItem header style={{ backgroundColor: '#85bf73' }}>
                <Text>
                    Reselect / useSelector / useDispatch
                </Text>
            </CardItem>
            <CardItem>
                <Item rounded>
                    <Icon name="ios-search" />
                    <Input value={inputValue} onChangeText={onChangeText} />
                </Item>
            </CardItem>
            {
                createNormalList()
            }
        </Card>
    );
};

export default ReselectReducerList;
