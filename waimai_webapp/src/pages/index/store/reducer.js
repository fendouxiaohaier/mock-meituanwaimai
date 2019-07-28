import { fromJS } from "immutable";

import * as constants from "./constants";

import * as buttonBarReducer from "../components/ButtonBar/reducer";

const defaultState = fromJS({
    buttonTabs: [
        {
            key: "home",
            name: "首页",
            icon: "#icon-home",
            iconActive: "#icon-home-copy",
        },
        {
            key: "order",
            name: "订单",
            icon: "#icon-order",
            iconActive: "#icon-order-copy",
        },
        {
            key: "my",
            name: "我的",
            icon: "#icon-mygroup",
            iconActive: "#icon-mygroup-copy"
        }
    ],
    activeTabKey: "home",
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_ACTIVE_TAB: 
            return buttonBarReducer.changeActiveTab(state, action);
    
        default:
            return state;
    }
}