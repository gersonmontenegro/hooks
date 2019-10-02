import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'native-base';

const MemoComponentCounter = () => {
    const memoComponentRenderCounter = useSelector(state => state.countersReducer.memoComponentRenderCounter);
    return (
        <View>
            <Text>Render counter in memo comp.: {memoComponentRenderCounter}</Text>
        </View>
    );
}

export default MemoComponentCounter;
