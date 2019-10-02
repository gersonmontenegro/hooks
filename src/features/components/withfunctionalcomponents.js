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
import RegularMemoComponent from 'components/regularmemocomponent';
import MemoComponentCounter from 'components/memocomponentcounter';

class WithFunctionalComponents extends Component {
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
                    <Text>Functional component with memo</Text>
                </CardItem>
                <Form>
                    <Item fixedLabel>
                        <Label>User value</Label>
                        <Input value={this.state.inputValue} onChangeText={this.onChangeText} />
                    </Item>
                </Form>
                <Button onPress={this.onClickAssign} block small style={{ marginLeft: 5, marginRight: 5 }} success>
                    <Text>Let's assignnn</Text>
                </Button>
                <CardItem>
                    <Body>
                        <RegularMemoComponent parameter={this.state.parameter} />
                        <MemoComponentCounter />
                    </Body>
                </CardItem>
            </Card>
        );
    }
};

export default WithFunctionalComponents;
