/**
 * Created by cuishaojie on 16/10/9.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './main';
var deviceWidth = Dimensions.get('window').width;
export default class index extends Component{

    linkToMain(){
        const {navigator} = this.props;
        navigator.push({
            name:'主页',
            component:Main
        })
    }


    render(){
        return (
            <View style={styles.backgd}>
                <View style={styles.container}>
                    <View style={styles.conten1}>
                        <Image style={{borderRadius:50,width:100,height:100}} source={require('../img/logo.jpg')}></Image>
                    </View>

                    <View style={styles.fromstyle}>
                        <View style={{ flex:1,flexDirection:"row",marginBottom:-23}}>
                            <View style={styles.icon}>
                                <Image style={{height: 40,width: 40,borderRadius:8}} source={require('../img/i-form-name.png')}></Image>
                            </View>
                            <TextInput
                                style={{height: 40,backgroundColor:"#fff",borderRadius: 5,marginRight:10,flex:8.5}}
                                placeholder="请输入用户名"
                                autoFocus={true}
                                onChangeText={(text) => this.setState({text})}
                            />
                        </View>
                        <View style={{ flex:1,flexDirection:"row",marginTop:-23}}>
                            <View style={styles.icon}>
                                <Image style={{height: 40,width: 40,borderRadius:8}} source={require('../img/i-form-password.png')}></Image>
                            </View>
                            <TextInput
                                style={{height: 40,backgroundColor:"#fff",borderRadius: 5,marginRight:10,flex:8.5}}
                                placeholder="请输入密码!"
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({text})}
                            />
                        </View>
                    </View>

                    <View style={styles.conten}>
                        <View style={styles.pwdquestion}>
                            <TouchableOpacity style={{backgroundColor:"#8DF89D"}}>
                               <Text style={{color:'red'}}>修改密码</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:"#8DF89D"}}>
                                <Text style={{color:'red'}}>忘记密码</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonlay}>
                            <TouchableOpacity onPress={(e)=>{this.linkToMain(e)}} style={[styles.buttonrow,{marginLeft:10,marginRight:5,flex:1}]} >
                                    <Text style={{flex:1,textAlign:'center'}}>登陆</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonrow,{marginLeft:5,marginRight:10,flex:1}]}>
                                    <Text style={{flex:1,textAlign:'center'}}>取消</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:3,margin:10,marginTop:-20,flexDirection:'row'}}>
                            <TouchableOpacity style={{flex:1,height:40,backgroundColor:"#e0f6ff",borderRadius:8,flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{flex:1,textAlign:'center'}}>新用户注册</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    backgd:{
        backgroundColor:"#e0f6ff",
        paddingTop:85,
        flex:1,
        alignItems:'center',
    },
    container:{
        width:deviceWidth-40,
        height: 400,
        backgroundColor:"#8DF89D",
        borderRadius:8,
        justifyContent:'center',
        opacity:0.5,
    },
    conten:{
        flex:1
    },
    conten1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    fromstyle:{
        flex:1,
        marginBottom:-55
    },
    icon:{
        flex:1.5,
        height: 40,
        marginLeft:10,
        borderRadius:8
    },
    pwdquestion:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        paddingLeft:55
    },
    buttonlay:{
        flex:3,
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonrow:{
        height:40,
        backgroundColor:"#e0f6ff",
        borderRadius:8,
        alignItems:'center',
        flexDirection:'row'
    }

});