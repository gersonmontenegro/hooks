import React, { useState } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
} from 'native-base';
import WithRegularComponents from 'components/withregularcomponents';
import WithFunctionalComponents from 'components/withfunctionalcomponents';

class WithComponents extends React.Component {
    constructor (props) {
        super(props);
    }

    onClickBack = () => {
        this.props.navigation.navigate('Home');
    };

    render () {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.onClickBack}>
                            <Icon name="ios-arrow-round-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>W. Components</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <WithRegularComponents />
                    <WithFunctionalComponents />
                </Content>
            </Container>
        );
    }
};

export default WithComponents;
