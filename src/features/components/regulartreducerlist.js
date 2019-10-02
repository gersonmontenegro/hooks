import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
import { setFilterRegularReducer, getDataWithFilterRegularReducer } from 'actions';

const avatar = require('assets/img/superman.png');

class RegularReducerList extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    createNormalList = () => (
        this.props.listFilteredData.map(item => (
                <ListItem key={`${item.id.toString()}`} avatar>
                    <Left>
                        <Thumbnail source={avatar} />
                    </Left>
                    <Body>
                        <Text>{`${item.first_name} ${item.last_name}`}</Text>
                    </Body>
                </ListItem>
            )
        )
    );

    onChangeText = text => {
        this.setState({ inputValue: text });
        this.props.setFilterRegularReducer(text.toLowerCase());
        this.props.getDataWithFilterRegularReducer();
    }

    render () {
        return (
            <Card>
                <CardItem header style={{ backgroundColor: '#7390bf' }}>
                    <Text>
                        Regular reducer
                    </Text>
                </CardItem>
                <CardItem>
                    <Item rounded>
                        <Icon name="ios-search" />
                        <Input value={this.inputValue} onChangeText={this.onChangeText} />
                    </Item>
                </CardItem>
                {
                    this.createNormalList()
                }
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    listFilteredData: state.filterReducer.filterDataWithRegularReducer,
});

const mapDispatchToProps = dispatch => ({
    setFilterRegularReducer: filter => dispatch( setFilterRegularReducer(filter) ),
    getDataWithFilterRegularReducer: () => dispatch( getDataWithFilterRegularReducer() ),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegularReducerList);
