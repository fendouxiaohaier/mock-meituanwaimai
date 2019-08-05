import { fromJS } from "immutable";
import * as constants from "../../../store/constants";

const defaultState = fromJS({
    orderList: [],  // 订单列表 
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.FETCH_ORDER_DATA:
            return state.set("orderList", fromJS(action.payload.digestlist));
    
        default:
            return state;
    }
}

export default reducer;