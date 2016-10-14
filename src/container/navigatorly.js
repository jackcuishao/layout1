/**
 * Created by cuishaojie on 16/10/10.
 */
import React,{Component} from 'react';
import {
    Navigator ,
    View ,
    Text
} from 'react-native';
import main from '../page/main';
import index from '../page/index';
import Tabview from '../container/Tabview';
import * as IndexActions from '../actions/IndexAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

 class navigatorly extends Component{
    constructor (props){
        super(props);
    }
    render (){
        let defaultName = '首页';
        let defaultComponent = Tabview;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
          }}
              renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...this.props} {...route.params} navigator={navigator} />
          }}
            />
        )
    }

}


const mapActionCreators = (dispatch)=>({
    main:bindActionCreators(IndexActions,dispatch)
});

const mapStateToProps = (state)=>({
    Main:state.Main
})

export default connect (mapStateToProps,mapActionCreators)(navigatorly)

