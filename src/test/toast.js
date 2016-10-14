/**
 * Created by cuishaojie on 16/10/14.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    TextInput,
    DatePickerIOS
} from 'react-native'
import Toast from 'react-native-root-toast';

export default class Example extends Component{
    constructor() {
        super(...arguments);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            visible: true
        }), 2000); // show toast after 2s

        setTimeout(() => this.setState({
            visible: false
        }), 5000); // hide toast after 5s
    };

    render() {
        return <View style={{flex:1}}><Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >This is a message</Toast>
        </View>;
    }
}