/**
 * Created by cuishaojie on 16/10/11.
 */
import * as types from '../actions/ActionType'
var moment = require('moment');
const btnInitselet={
    selectedBtn:'danc',
    chufdate:new Date(),
    fancdate:moment(new Date()).add(3,'d'),
    isShowfanc:false,
    modelvisble:false,
    ischufa:true,
    chufcity:"",
    didacity:""
}

export default function Btnselt(state = btnInitselet, action = {}) {
    switch (action.type){
        case types.TAB_CHANGE:
            console.log("showfanc=8888"+action.isShowfanc);
            return Object.assign(
                {},state,{
                    selectedBtn:action.selectedBtn,
                    isShowfanc:action.isShowfanc
                }
            );
        break;
        case types.CHUFCDATE_CHANGE:
            console.log("chufashijian=11111"+action.chufdate);
            return Object.assign(
                {},state,{
                    chufdate:action.chufdate
                }
            );
        break;
        case types.FANCDATE_CHANGE:
            console.log("fancshijian=2222"+action.fancdate);
            return Object.assign(
                {},state,{
                    fancdate:action.fancdate
                }
            );
            break;
        case types.MODEL_VISBLE:
            return Object.assign(
                {},state,{
                    modelvisble:action.modelvisble,
                    ischufa:action.ischufa
                }
            );
            break;
        case types.CHUFCITY:
            console.log("CHUFA2"+action.chufcity)
            return Object.assign(
                {},state,{
                    chufcity:action.chufcity
                }
            );
            break;
        case types.DIDACITY:
            return Object.assign(
                {},state,{
                    didacity:action.didacity
                }
            );
            break;
        default:
            return state;
    }
}