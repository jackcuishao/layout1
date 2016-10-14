/**
 * Created by cuishaojie on 16/10/11.
 */
import React,{Component} from 'react';
import {createStore,applyMiddleware,combineReducers,bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/index';
import Navigatorly from '../container/navigatorly';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export  default class App extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedBtn:'danc'
        };
      }

    render(){
        return(
            <Provider store={store}>
                <Navigatorly />
            </Provider>
        )
    }
}




