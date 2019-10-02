import React from 'react';
import {Text, ListItem, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const OptionItem = ({name, onPressEvent}) => {
    return (
        <ListItem onPress={onPressEvent}>
            <Left>
                <Text>{name}</Text>
            </Left>
            <Right>
                <Icon name="ios-arrow-forward" />
            </Right>
        </ListItem>
    );
}

export default OptionItem;
