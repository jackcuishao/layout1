/**
 * Created by cuishaojie on 16/10/12.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    DatePickerIOS
} from 'react-native'
var CustomActionSheet = require('react-native-custom-action-sheet');

export default class datePickerModal extends Component{
    constructor (props){
        super(props);

    }
    _showDatePicker (dateType) { //切换显隐标记
        this.setState({datePickerModalVisible: !this.state.datePickerModalVisible});
    };

    _onDateChange (date) {  //改变日期state
        alert(date);  //弹出提示框: 显示你选择日期
        this.setState({
            chooseDate: date
        });
    };

    render(){
        return(
        <CustomActionSheet
            modalVisible={this.props.Visible}  //显隐标记
            onCancel={()=>this._showDatePicker(this.props.dateTyp)}>
            <View style={{backgroundColor:'#FFFFFF',marginBottom:5,borderRadius:8}}>
                <DatePickerIOS
                    mode={"date"}   //选择器模式: 'date'(日期), 'time'(时间), 'datetime'(日期和时间)
                    minimumDate={new Date()}  //最小时间 (这里设置的是当前的时间)
                    //minuteInterval={30} //最小时间间隔 (这里设置的是30分钟)
                    date={this.props.date}  //默认的时间
                    timeZoneOffsetInMinutes={8 * 60}
                    onDateChange={this._onDateChange(date,this.props.dateTyp)}  //日期被修改时回调此函数
                />
            </View>
        </CustomActionSheet>
        )
    }
}