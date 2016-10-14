/**
 * Created by cuishaojie on 16/10/10.
 */
import React,{Component} from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    TouchableHighlight,
    NavigatorIOS,
    TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Index from '../page/index';
import Main from '../page/main'

export default class Tabview extends Component{
    // 构造
      constructor(props) {
        super(props);
      }
    render(){
        return(
            <TabBarIOS>
                <Icon.TabBarItem
                    title="首页"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={true}
                    color={'red'}
                >
                    <Index {...this.props} />
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="客服"
                    iconName="ios-book-outline"
                    selectedIconName="ios-book"
                    selected={false}
                >
                    <Main {...this.props} />
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="我的"
                    iconName="ios-heart-outline"
                    selectedIconName="ios-heart"
                    selected={false}
                >
                    <Index {...this.props} />
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}