import React, { Component } from 'react';
import {
    Card,
    CardItem,
    Button,
    Body,
    Text,
    Input,
    Label,
    Form,
    Item,
} from 'native-base';
import RegularComponent from 'components/regularcomponent';
import RegularComponentCounter from 'components/regularcomponentcounter';

class WithRegularComponents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '1',
            parameter: '1',
        };
    }
    
    onClickAssign = () => {
        this.setState({ parameter: parseInt(this.state.inputValue) });
    };

    onChangeText = text => {
        this.setState({ inputValue: text })
    };

    render () {
        return (
            <Card>
                <CardItem header>
                    <Text>Regular component</Text>
                </CardItem>
                <Form>
                    <Item fixedLabel>
                        <Label>User value</Label>
                        <Input value={this.state.inputValue} onChangeText={this.onChangeText} />
                    </Item>
                </Form>
                <Button danger onPress={this.onClickAssign} block small style={{ marginLeft: 5, marginRight: 5 }}>
                    <Text>Let's assign</Text>
                </Button>
                <CardItem>
                    <Body>
                        <RegularComponent parameter={this.state.parameter} />
                        <RegularComponentCounter />
                    </Body>
                </CardItem>
            </Card>
        );
    }
};

export default WithRegularComponents;
