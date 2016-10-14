import * as types from './ActionType';

export function tabChange(selectedTab){
    return {
        type : types.TAB_CHANGE,
        selectedBtn:selectedTab,
        isShowfanc:('fanc'==selectedTab?true:false)
    }
}

export function chufDate(selecteddate){
    return {
        type : types.CHUFCDATE_CHANGE,
        chufdate:selecteddate
    }
}

export function fancDate(selecteddate){
    return {
        type : types.FANCDATE_CHANGE,
        fancdate:selecteddate
    }
}
export function Modelvisble(modelvisble,ischufa){
    "use strict";
    return{
        type:types.MODEL_VISBLE,
        modelvisble:modelvisble,
        ischufa:ischufa||ischufa
    }
}

export function chufcity(value){
    console.log("CHUFA"+value.name);
    "use strict";
    return{
        type:types.CHUFCITY,
        chufcity:value
    }
}

export function didacity(value){
    console.log("CHUFA"+value.name);
    "use strict";
    return{
        type:types.DIDACITY,
        didacity:value
    }
}
