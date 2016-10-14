/**
 * Created by cuishaojie on 16/10/10.
 */
import React,{Component} from 'react';
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
import CountryPicker from 'react-native-country-picker-modal';
var Icon = require('react-native-vector-icons/FontAwesome');
var CustomActionSheet = require('react-native-custom-action-sheet');

var moment = require('moment');
export default class Main extends Component{
    constructor (props){
        super(props);
    }

    state = {
        datePickerModalVisible: false,  //选择器显隐标记
        dateType:'chuf',
        chooseDate:new Date()
    };

    _showDatePicker (dateType) { //切换显隐标记
        this.setState({datePickerModalVisible: !this.state.datePickerModalVisible,dateType:dateType});
    };

    _onDateChange (date) {  //改变日期state
        const {chufDate} = this.props.main;
        const {fancDate} = this.props.main;
        this.setState({chooseDate:date});
        if(this.state.dateType=='chuf'){
            chufDate(date);
        }if(this.state.dateType=='fanc'){
            fancDate(date);
        }

    };

    isBtn(btn){
        const { Main } = this.props;
        if(Main.selectedBtn == btn){
            return true;
        }else {
            return false;
        }
    }



    render(){
        let devwidth = Dimensions.get('window').width;
        const {tabChange} = this.props.main;
        const { Main } = this.props;
        const {fancDate} = this.props.main;
        const {Modelvisble} = this.props.main;

        let datePickerModal = (   //日期选择器组件 (根据标记赋值为 选择器 或 空)
            this.state.datePickerModalVisible ?
                <CustomActionSheet
                    modalVisible={this.state.datePickerModalVisible}  //显隐标记
                    onCancel={()=>this._showDatePicker()} buttonText={'退出'}>
                    <View style={{backgroundColor:'#FFFFFF',marginBottom:5,borderRadius:8}}>
                        <DatePickerIOS
                            mode={"date"}   //选择器模式: 'date'(日期), 'time'(时间), 'datetime'(日期和时间)
                            minimumDate={new Date()}  //最小时间 (这里设置的是当前的时间)
                            //minuteInterval={30} //最小时间间隔 (这里设置的是30分钟)
                            date={this.state.chooseDate}  //默认的时间
                            timeZoneOffsetInMinutes={8 * 60}
                            onDateChange={this._onDateChange.bind(this)}  //日期被修改时回调此函数
                        />
                    </View>
                </CustomActionSheet> : null
        );

        return (
            <View style={{flex:1,backgroundColor:"#EEEEEE"}}>
                <Image style={{width:devwidth,height:250}} source={require('../img/img_main_3.png')}>
                    <View style={styles.bgView}></View>
                    <View style={styles.btView}>
                        <TouchableHighlight underlayColor={'#FFFFFF'} style={this.isBtn('danc')?styles.tab_select:styles.tab_def} onPress={ ()=>{tabChange('danc')}}>
                            <Text style={this.isBtn('danc')?styles.blackfont:styles.whitefont}>单程</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'#FFFFFF'} style={styles.tab_def} style={this.isBtn('fanc')?styles.tab_select:styles.tab_def} onPress={ ()=>{tabChange('fanc')}}>
                            <Text style={this.isBtn('fanc')?styles.blackfont:styles.whitefont}>返程</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{height: 105,backgroundColor:'#FFFFFF'}}>
                            <View style={{flex:1.2,flexDirection:'row'}}>
                                <View style={{height: 35,marginLeft:15,flex:4.5,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                                    <TextInput
                                        style={{flex:1}}
                                        placeholder="出发城市"
                                        onFocus={()=>Modelvisble(true,true)}
                                        value={Main.chufcity.name}
                                    />
                                    <CountryPicker
                                        closeable={true}
                                        Main={Main}
                                        main={this.props.main}
                                    />
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                    <Icon      //飞机图标
                                        name="plane"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                        size={30}   //图片大小
                                        color="#83AFF9"  //图片颜色
                                    />
                                </View>

                                <View style={{height: 35,marginRight:15,flex:4.5,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                                    <TextInput
                                        style={{flex:1,textAlign:'right'}}
                                        placeholder="抵达城市"
                                        //secureTextEntry={true}
                                        onFocus={()=>Modelvisble(true,false)}
                                        value={Main.didacity.name}
                                    />
                                </View>

                            </View>
                            <View style={{flex:1.2,flexDirection:'row',alignItems:'center',marginLeft:15,marginRight:15,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                                <Text
                                    style={{flex:4.5}}
                                    //autoFocus={true}
                                    allowFontScaling={true}
                                    onPress={()=>this._showDatePicker('chuf')}
                                >{Main.chufdate==""?"":moment(Main.chufdate).format('YYYY-MM-DD')}</Text>
                                {(
                                    Main.isShowfanc?(
                                        <View style={{flex:5.5,flexDirection:'row',alignItems:'center'}}>
                                            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                                <Icon    //返程图标
                                                    name="refresh"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                                    size={30}   //图片大小
                                                    color="#83AFF9"  //图片颜色
                                                />
                                            </View>

                                            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                                {(Main.fancdate==""?null:
                                                    <Icon  //删除图标
                                                    name="remove"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                                    size={20}   //图片大小
                                                    color="red"  //图片颜色
                                                    onPress={() =>{fancDate("")}}
                                                />)}
                                            </View>
                                            <Text
                                                style={{flex:3.5,textAlign:'right'}}
                                                allowFontScaling={true}
                                                onPress={()=>this._showDatePicker('fanc')}
                                                //autoFocus={true}
                                            >{Main.fancdate==""?"":moment(Main.fancdate).format('YYYY-MM-DD')}</Text>
                                        </View>
                                    ):null
                                )}

                            </View>
                            <View style={{flex:1.2,flexDirection:'row',marginLeft:15,marginRight:15,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                                <TextInput
                                    style={{flex:5.5}}
                                    placeholder="仓位选择"
                                    //autoFocus={true}
                                    onFocus={()=>alert('sss')}
                                />
                                <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                    <Icon
                                        name="remove"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                        size={20}   //图片大小
                                        color="red"  //图片颜色
                                    />
                                </View>
                                <View style={{flex:3.5,justifyContent:'flex-end',flexDirection:'column'}}>
                                    <Text>携带儿童</Text>
                                    <Text>2-12岁</Text>
                                </View>
                            </View>
                        </View>
                </Image>
                <View style={{flex:9,backgroundColor:'#000'}}>
                    <View style={{flex:2,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <TouchableHighlight underlayColor={'#E55368'} onPress={()=>{this.consoletest}} style={{height:40,width:devwidth*0.8,backgroundColor:"#F05050",borderRadius:8,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1,textAlign:'center'}}>查询航班</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:8,backgroundColor:'#EEEEEE'}}>
                        {datePickerModal}
                    </View>

                </View>
            </View>
        );
    }
}


var styles=StyleSheet.create({
    bgView:{
        height:40,
        backgroundColor:'black',
        opacity:.5,
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginBottom:-45,
        marginTop:105
    },
    btView:{
        height:45,
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    tab_select:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        backgroundColor:"#FFFFFF"
    },
    tab_def:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    whitefont:{
        flex:1,
        textAlign:'center',
        color:"#FFFFFF"
    },
    blackfont:{
        flex:1,
        textAlign:'center',
        color:"#000"
    },
    datePickerContainer: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
    },

})