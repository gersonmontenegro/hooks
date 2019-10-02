import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'native-base';
import { addRegularComponentRenderCount } from '../../actions';

const RegularComponent = ({ parameter }) => {
    const dispatch = useDispatch();
    dispatch( addRegularComponentRenderCount() );
    return (
        <View>
            <Text>Current prop: {parameter}</Text>
        </View>
    );
}

export default RegularComponent;
