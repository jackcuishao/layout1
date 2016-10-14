/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PickerIOS,
} from 'react-native';
var PickerItemIOS = PickerIOS.Item;
export default class PickerIOSDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedCourse:'Java',
            selectedIndex:1,
        };
    }
    render() {
        return (
            <View >
                <Text style={styles.welcome}>
                    PickerIOS使用实例
                </Text>
                <PickerIOS
                    itemStyle={{fontSize: 25, color: 'red', textAlign: 'center', fontWeight: 'bold'}}
                    selectedValue={this.state.selectedCourse}
                    onValueChange={(selectedCourse,selectedIndex)=> this.setState({selectedCourse,selectedIndex})}>
                    <PickerItemIOS
                        key='0'
                        value='C++'
                        label='C++'
                    />
                    <PickerItemIOS
                        key='1'
                        value='Java'
                        label='Java'
                    />
                    <PickerItemIOS
                        key='2'
                        value='Android'
                        label='Android'
                    />
                    <PickerItemIOS
                        key='3'
                        value='iOS'
                        label='iOS'
                    />
                    <PickerItemIOS
                        key='4'
                        value='React Native'
                        label='React Native'
                    />
                    <PickerItemIOS
                        key='5'
                        value='Swift'
                        label='Swift'
                    />
                    <PickerItemIOS
                        key='5'
                        value='.Net'
                        label='.Net'
                    />
                </PickerIOS>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});

