import { fromJS } from "immutable";

import * as constants from "../../../store/constants";

const defaultState = fromJS({
    categorys: [],  // 分类数组
    contentList: [],  // 附近商家数组集合
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.FETCH_HEAD:
            return state.set("categorys", fromJS(action.payload.primary_filter));
        
        case constants.FETCH_CONTENT_LIST:
            return state.set("contentList", fromJS(action.payload));
            
        default:
            return state
    }
}

export default reducer;