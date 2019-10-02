import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'native-base';
import { addMemoComponentRenderCount } from '../../actions';

const RegularMemoComponent = ({ parameter }) => {
    const dispatch = useDispatch();
    dispatch( addMemoComponentRenderCount() );
    return (
        <View>
            <Text>Current prop: {parameter}</Text>
        </View>
    );
}

export default memo(RegularMemoComponent);
