import { fromJS } from "immutable";
import * as constants from "../../../store/constants";

const defaultState = fromJS({
    orderList: [],  // 订单列表 
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.FETCH_ORDER_DATA: {
            let orderList = state.get("orderList").toJS();
            Array.prototype.push.apply(orderList, action.payload.digestlist);
            return state.set("orderList", fromJS(orderList));
        }
        
        default:
            return state;
    }
}

export default reducer;