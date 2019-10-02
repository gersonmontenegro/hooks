import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'native-base';

const RegularComponentCounter = () => {
    const regularComponentRenderCounter = useSelector(state => state.countersReducer.regularComponentRenderCounter);
    return (
        <View>
            <Text>Render counter: {regularComponentRenderCounter}</Text>
        </View>
    );
}

export default RegularComponentCounter;
